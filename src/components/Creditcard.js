import React from 'react';
// import StatusBadge from './StatusBadge';  // wrong import - fixed below
import StatusBadge from './Badge'; // fixed the import name
import CertificateGenerator from './CertificateGenerator';
import './CreditCard.css';

function CreditCard({ credit }) {
  // console.log('credit data:', credit); // debug log - can remove later
  
  return (
    <div className="credit-card">
      <div className="credit-header">
        <h3 className="project-name">{credit.project_name}</h3>
        <StatusBadge status={credit.status} />
      </div>
      
      <div className="credit-details">
        <div className="detail-row">
          <span className="label">UNIC ID:</span>
          <span className="value">{credit.unic_id}</span>
        </div>
        
        <div className="detail-row">
          <span className="label">Vintage:</span>
          <span className="value">{credit.vintage}</span>
        </div>
        
        {/* <div className="detail-row">
          <span className="label">Description:</span>
          <span className="value">{credit.description || 'N/A'}</span>
        </div> */}
      </div>
      
      <div className="credit-actions">
        <CertificateGenerator credit={credit} />
        {/* <button className="view-details-btn">View Details</button> maybe add this later? */}
      </div>
    </div>
  );
}

export default CreditCard;