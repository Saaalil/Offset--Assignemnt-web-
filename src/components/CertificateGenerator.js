import React, { useState } from 'react';
import jsPDF from 'jspdf';
import FormatModal from './FormatModal';
import './CertificateGenerator.css';

function CertificateGenerator({ credit }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isGenerating, setIsGenerating] = useState(false); 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormatSelection = (format) => {
   
    if (format === 'html') {
      generateHTMLCertificate();
    } else if (format === 'pdf') {
      generatePDFCertificate();
    }
  };

  const generateHTMLCertificate = () => {
    const timestamp = new Date().toLocaleString();
    
    const certificateHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Carbon Credit Retirement Certificate</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px;
            background-color: #f5f5f5;
          }
          .certificate { 
            background: white; 
            padding: 40px; 
            border-radius: 10px; 
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            border: 3px solid #2c5530;
          }
          .header { 
            text-align: center; 
            margin-bottom: 30px; 
            border-bottom: 2px solid #2c5530;
            padding-bottom: 20px;
          }
          .title { 
            font-size: 28px; 
            color: #2c5530; 
            margin-bottom: 10px; 
            font-weight: bold;
          }
          .subtitle { 
            font-size: 16px; 
            color: #666; 
          }
          .content { 
            margin: 30px 0; 
          }
          .field { 
            margin: 15px 0; 
            display: flex; 
            justify-content: space-between;
            padding: 10px;
            border-bottom: 1px solid #eee;
          }
          .label { 
            font-weight: bold; 
            color: #333; 
          }
          .value { 
            color: #2c5530; 
            font-weight: 500;
          }
          .footer { 
            text-align: center; 
            margin-top: 40px; 
            font-size: 12px; 
            color: #888; 
          }
        </style>
      </head>
      <body>
        <div class="certificate">
          <div class="header">
            <div class="title">Carbon Credit Retirement Certificate</div>
            <div class="subtitle">Official Retirement Documentation - HTML Format</div>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">UNIC ID:</span>
              <span class="value">${credit.unic_id}</span>
            </div>
            <div class="field">
              <span class="label">Project Name:</span>
              <span class="value">${credit.project_name}</span>
            </div>
            <div class="field">
              <span class="label">Vintage:</span>
              <span class="value">${credit.vintage}</span>
            </div>
            <div class="field">
              <span class="label">Status:</span>
              <span class="value">${credit.status}</span>
            </div>
            <div class="field">
              <span class="label">Generated:</span>
              <span class="value">${timestamp}</span>
            </div>
          </div>
          
          <div class="footer">
            
          </div>
        </div>
      </body>
      </html>
    `;
    
    downloadFile(certificateHTML, `certificate_${credit.unic_id}_${Date.now()}.html`, 'text/html');
  };

  const generatePDFCertificate = () => {
    const timestamp = new Date().toLocaleString();
    
    // Create new PDF document
    const pdf = new jsPDF();
    
    // Set font and colors
    pdf.setFont("helvetica", "normal");
    
    // Add title
    pdf.setFontSize(20);
    pdf.setTextColor(44, 85, 48); // #2c5530
    pdf.text('Carbon Credit Retirement Certificate', 105, 30, { align: 'center' });
    
    // Add subtitle
    pdf.setFontSize(12);
    pdf.setTextColor(102, 102, 102); // #666
    pdf.text('Official Retirement Documentation - PDF Format', 105, 45, { align: 'center' });
    
    // Add border line
    pdf.setDrawColor(44, 85, 48);
    pdf.setLineWidth(1);
    pdf.line(20, 55, 190, 55);
    
    // Certificate content
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    
    let yPos = 80;
    const lineHeight = 20;
    
    // UNIC ID
    pdf.setFont("helvetica", "bold");
    pdf.text('UNIC ID:', 30, yPos);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(44, 85, 48);
    pdf.text(credit.unic_id, 80, yPos);
    
    // Name
    yPos += lineHeight;
    pdf.setTextColor(0, 0, 0);
    pdf.setFont("helvetica", "bold");
    pdf.text('Project Name:', 30, yPos);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(44, 85, 48);
    pdf.text(credit.project_name, 80, yPos);
    
    // Year
    yPos += lineHeight;
    pdf.setTextColor(0, 0, 0);
    pdf.setFont("helvetica", "bold");
    pdf.text('Vintage:', 30, yPos);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(44, 85, 48);
    pdf.text(credit.vintage.toString(), 80, yPos);
    
    // Status
    yPos += lineHeight;
    pdf.setTextColor(0, 0, 0);
    pdf.setFont("helvetica", "bold");
    pdf.text('Status:', 30, yPos);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(44, 85, 48);
    pdf.text(credit.status, 80, yPos);
    
    // timestamp
    yPos += lineHeight;
    pdf.setTextColor(0, 0, 0);
    pdf.setFont("helvetica", "bold");
    pdf.text('Generated:', 30, yPos);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(44, 85, 48);
    pdf.text(timestamp, 80, yPos);
    
   
    // Save the PDF
    pdf.save(`certificate_${credit.unic_id}_${Date.now()}.pdf`);
  };

  const downloadFile = (content, filename, type) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <button 
        onClick={openModal}
        className="download-button"
      >
        Download Retirement Certificate
      </button>
      
      <FormatModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        onSelectFormat={handleFormatSelection}
      />
    </>
  );
}

export default CertificateGenerator;