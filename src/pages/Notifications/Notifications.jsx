import { useState } from 'react';
import { Bell, MessageCircle, BookOpen, FileText, Calendar, CheckCircle } from 'lucide-react';
import { notificationsData } from '../../data/mockData';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const markRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'message': return <MessageCircle size={20} color="var(--color-grape)" />;
      case 'homework': return <BookOpen size={20} color="var(--color-sky)" />;
      case 'note': return <FileText size={20} color="var(--color-mint)" />;
      case 'event': return <Calendar size={20} color="var(--color-mango)" />;
      default: return <Bell size={20} color="var(--color-ink)" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="notifications-page">
      <div className="page-header">
        <h2 className="page-title text-ink"><Bell size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />الإشعارات</h2>
        {unreadCount > 0 && (
          <button className="btn btn-outline" onClick={markAllRead}>
            <CheckCircle size={16} /> تحديد الكل كمقروء
          </button>
        )}
      </div>

      <div className="notif-list">
        {notifications.map(notif => (
          <div key={notif.id} className={`notif-item card ${!notif.read ? 'notif-unread' : ''}`} onClick={() => markRead(notif.id)}>
            <div className={`notif-icon-box ${!notif.read ? 'notif-icon-active' : ''}`}>
              {getIcon(notif.type)}
            </div>
            <div className="notif-content">
              <p className="notif-text">{notif.text}</p>
              <span className="notif-time">{notif.time}</span>
            </div>
            {!notif.read && <span className="notif-dot"></span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
