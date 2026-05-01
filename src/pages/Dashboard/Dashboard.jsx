import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, BookOpen, Heart, Award, Clock, Star, AlertTriangle } from 'lucide-react';
import { childData, weeklyProgress, subjectPerformance, teacherNotes, homeworkData } from '../../data/mockData';
import './Dashboard.css';

const COLORS = ['#6EC5FF', '#FF6F91', '#3DD1C8', '#FFD166'];

const Dashboard = () => {
  const pendingHomework = homeworkData.filter(h => h.status !== 'مكتمل').length;
  const completedHomework = homeworkData.filter(h => h.status === 'مكتمل').length;

  return (
    <div className="dashboard-page">
      <h2 className="page-title text-ink">
        <TrendingUp size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />
        مرحباً، أم {childData.name.split(' ')[0]}
      </h2>

      {/* Child Overview */}
      <div className="child-overview card">
        <div className="child-avatar-lg" style={{ backgroundColor: childData.color }}>{childData.avatar}</div>
        <div className="child-info">
          <h3>{childData.name}</h3>
          <p>{childData.level} • {childData.school}</p>
          <p className="child-teacher">المعلمة: {childData.teacher}</p>
        </div>
        <div className="child-quick-stat">
          <span className="stat-value text-mint">{childData.performance}%</span>
          <span className="stat-label">الأداء العام</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        <div className="kpi-card card">
          <div className="kpi-icon bg-mint" style={{ background: 'rgba(61,209,200,0.15)' }}><Award size={24} color="var(--color-mint)" /></div>
          <div className="kpi-value">{childData.performance}%</div>
          <div className="kpi-label">متوسط الأداء</div>
        </div>
        <div className="kpi-card card">
          <div className="kpi-icon" style={{ background: 'rgba(255,138,61,0.15)' }}><BookOpen size={24} color="var(--color-mango)" /></div>
          <div className="kpi-value">{childData.homeworkCompletion}%</div>
          <div className="kpi-label">إنجاز الواجبات</div>
        </div>
        <div className="kpi-card card">
          <div className="kpi-icon" style={{ background: 'rgba(185,140,255,0.15)' }}><Heart size={24} color="var(--color-grape)" /></div>
          <div className="kpi-value">{childData.behaviorScore}%</div>
          <div className="kpi-label">السلوك</div>
        </div>
        <div className="kpi-card card">
          <div className="kpi-icon" style={{ background: 'rgba(110,197,255,0.15)' }}><Users size={24} color="var(--color-sky)" /></div>
          <div className="kpi-value">{childData.attendance}%</div>
          <div className="kpi-label">الحضور</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="charts-row">
        <div className="card chart-card">
          <h3><TrendingUp size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />الأداء الأسبوعي</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={weeklyProgress}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="score" fill="var(--color-mint)" radius={[8,8,8,8]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card chart-card">
          <h3>الأداء حسب المادة</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={subjectPerformance} cx="50%" cy="50%" innerRadius={50} outerRadius={85} dataKey="score" paddingAngle={4}>
                {subjectPerformance.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="pie-legend">
            {subjectPerformance.map((item, i) => (
              <div key={i} className="legend-item">
                <span className="legend-dot" style={{ backgroundColor: COLORS[i] }}></span>
                {item.name} ({item.score}%)
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bottom-row">
        {/* Homework Summary */}
        <div className="card">
          <h3><BookOpen size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />ملخص الواجبات</h3>
          <div className="homework-summary">
            <div className="hw-stat"><span className="hw-num text-mint">{completedHomework}</span><span>مكتمل</span></div>
            <div className="hw-stat"><span className="hw-num text-coral">{pendingHomework}</span><span>قيد الانتظار</span></div>
          </div>
          {homeworkData.filter(h => h.status !== 'مكتمل').slice(0, 3).map(hw => (
            <div key={hw.id} className="hw-item">
              <Clock size={14} color="#999" />
              <span>{hw.title}</span>
              <span className="hw-due">{hw.dueDate}</span>
            </div>
          ))}
        </div>

        {/* Latest Teacher Notes */}
        <div className="card">
          <h3><Star size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />آخر ملاحظات المعلمة</h3>
          {teacherNotes.slice(0, 3).map(note => (
            <div key={note.id} className="note-item">
              <div className={`note-badge ${note.type === 'achievement' ? 'bg-mint' : note.type === 'recommendation' ? 'bg-mango' : 'bg-sky'}`}>
                {note.type === 'achievement' ? <Award size={14} color="white" /> : note.type === 'recommendation' ? <AlertTriangle size={14} color="white" /> : <Star size={14} color="white" />}
              </div>
              <div className="note-content">
                <p>{note.text}</p>
                <span className="note-date">{note.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
