import React from 'react';
import './FormatModal.css';

function FormatModal({ isOpen, onClose, onSelectFormat }) {
  if (!isOpen) return null;

  const handleFormatSelect = (format) => {
    onSelectFormat(format);
    onClose();
  };

 
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Choose Download Format</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <p>Select the format for your retirement certificate:</p>
          
          <div className="format-options">
            <button 
              className="format-button html-button"
              onClick={() => handleFormatSelect('html')}
            >
              <div className="format-icon">🌐</div>
              <div className="format-text">
                <strong>HTML</strong>
                <small>Web page format</small>
              </div>
            </button>
            
            <button 
              className="format-button pdf-button"
              onClick={() => handleFormatSelect('pdf')}
            >
              <div className="format-icon">📄</div>
              <div className="format-text">
                <strong>PDF</strong>
                <small>Portable document</small>
              </div>
            </button>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default FormatModal;