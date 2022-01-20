import React from 'react';

export interface NotificationProps {
    showNotification: boolean,
}

const Notification = ({showNotification}: NotificationProps) => {
	return (
	<div className={`notification-container ${showNotification ? 'show' : ''}` }>
      <p>You have already entered this letter</p>
    </div>
	)
}

export default Notification;
