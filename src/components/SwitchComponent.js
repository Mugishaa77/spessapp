import React, { useState } from 'react';
import './SwitchComponent.css'; // Import CSS file for styling

function SwitchComponent() {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="switch-container">
      <div
        className={`switch-tab ${activeTab === 'all' ? 'active' : ''}`}
        onClick={() => handleTabChange('all')}
      >
        All
      </div>
      <div
        className={`switch-tab ${activeTab === 'unread' ? 'active' : ''}`}
        onClick={() => handleTabChange('unread')}
      >
        Unread
      </div>
      <div className={`switch-slider ${activeTab}`} />
    </div>
  );
}

export default SwitchComponent;
