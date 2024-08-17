import React, { useState } from 'react';
import '../styles/notification.css'

const NotificationDropdown = ({ notifications }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="notification-dropdown">
      <div className="notification-icon" >
      <button className="round-btn box-shadow" onClick={toggleDropdown}>
            <i className="fas fa-bell"></i>
          </button>
      </div>
      {isOpen && (
        <div className="notification-list">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <div key={index} className="notification-item">
                <div className="date">{notification.date}</div>
                <div className="content">{notification.content}</div>
              </div>
            ))
          ) : (
            <div className="notification-item">No new notifications</div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
