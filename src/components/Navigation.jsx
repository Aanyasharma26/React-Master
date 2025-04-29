import React from 'react';

const Navigation = ({ activeTab, onTabChange }) => {
  return (
    <div className="navigation">
      <button className={activeTab === 'add' ? 'active' : ''} onClick={() => onTabChange('add')}>Add Note</button>
      <button className={activeTab === 'view' ? 'active' : ''} onClick={() => onTabChange('view')}>View Notes</button>
    </div>
  );
};

export default Navigation;
