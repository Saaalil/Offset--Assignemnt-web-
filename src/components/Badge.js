import React from 'react';
import './StatusBadge.css';

function StatusBadge({ status }) {
  const getBadgeClass = () => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'badge badge-active';
      case 'retired':
        return 'badge badge-retired';
      default:
        return 'badge badge-default';
    }
  };

  return (
    <span className={getBadgeClass()}>
      {status}
    </span>
  );
}

export default StatusBadge;