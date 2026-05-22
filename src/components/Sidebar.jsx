import { NavLink } from 'react-router-dom';
import { LayoutDashboard, User, BookOpen, MessageCircle, Brain, Calendar, LogOut, GraduationCap, Bell } from 'lucide-react';
import { useAuth } from '../services/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { logout } = useAuth();
  const menuItems = [
    { name: 'الرئيسية', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'ملف الطفل', icon: <User size={20} />, path: '/profile' },
    { name: 'الواجبات', icon: <BookOpen size={20} />, path: '/homework' },
    { name: 'الرسائل', icon: <MessageCircle size={20} />, path: '/messages' },
    { name: 'الأخصائي النفسي', icon: <Brain size={20} />, path: '/psychologist' },
    { name: 'الجدول والفعاليات', icon: <Calendar size={20} />, path: '/schedule' },
    { name: 'الإشعارات', icon: <Bell size={20} />, path: '/notifications' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/logo.png" alt="علّمني" className="sidebar-logo-img" />
        <p className="text-ink">واجهة ولي الأمر</p>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, i) => (
          <NavLink key={i} to={item.path} end={item.path === '/'} className={({ isActive }) => `sidebar-link ${isActive ? 'active' : 'text-ink'}`} title={item.name}>
            <span className="icon-wrapper">{item.icon}</span>
            <span className="link-text">{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button className="sidebar-link sidebar-logout text-ink" onClick={logout} title="تسجيل الخروج">
          <span className="icon-wrapper"><LogOut size={20} /></span>
          <span className="link-text">تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
