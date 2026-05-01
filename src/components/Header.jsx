import { Bell, Search } from 'lucide-react';
import { childData } from '../data/mockData';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-search">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="ابحث..." />
      </div>
      <div className="header-actions">
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        <div className="user-info">
          <div className="user-avatar" style={{ backgroundColor: childData.color }}>{childData.avatar}</div>
          <span className="user-name">أم {childData.name.split(' ')[0]}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
