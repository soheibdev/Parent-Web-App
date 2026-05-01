import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { User, BookOpen, Brain, Activity, Star, AlertTriangle, CheckCircle, MessageSquare, TrendingUp, Dumbbell } from 'lucide-react';
import { childData, subjectPerformance, behaviorData, physicalData, teacherNotes } from '../../data/mockData';
import './ChildProfile.css';

const ChildProfile = () => {
  const barData = subjectPerformance.map(s => ({ name: s.name, score: s.score }));
  const COLORS = ['#6EC5FF', '#FF6F91', '#3DD1C8', '#FFD166'];

  return (
    <div className="profile-page">
      <h2 className="page-title text-ink"><User size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />ملف الطفل</h2>

      {/* Hero Card */}
      <div className="profile-hero card">
        <div className="profile-avatar" style={{ backgroundColor: childData.color }}>{childData.avatar}</div>
        <div className="profile-info">
          <h3>{childData.name}</h3>
          <p>{childData.level} • العمر: {childData.age} سنوات</p>
          <p>{childData.school}</p>
        </div>
        <div className="profile-stats">
          <div className="pstat"><span className="pstat-val text-mint">{childData.performance}%</span><span className="pstat-lbl">الأداء</span></div>
          <div className="pstat"><span className="pstat-val text-sky">{childData.attendance}%</span><span className="pstat-lbl">الحضور</span></div>
          <div className="pstat"><span className="pstat-val text-grape">{childData.behaviorScore}%</span><span className="pstat-lbl">السلوك</span></div>
        </div>
      </div>

      <div className="profile-grid">
        {/* Academic Performance */}
        <div className="card">
          <h3><BookOpen size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />الأداء الأكاديمي</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis hide domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="score" radius={[8,8,8,8]} barSize={45}>
                {barData.map((_, i) => (
                  <rect key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="strengths-weaknesses">
            <div className="sw-section">
              <h4><CheckCircle size={16} color="var(--color-mint)" /> نقاط القوة</h4>
              <ul>{childData.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
            <div className="sw-section">
              <h4><AlertTriangle size={16} color="var(--color-coral)" /> نقاط التحسين</h4>
              <ul>{childData.weaknesses.map((w, i) => <li key={i}>{w}</li>)}</ul>
            </div>
          </div>
        </div>

        {/* Behavior & Social */}
        <div className="card">
          <h3><Brain size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />السلوك والتفاعل الاجتماعي</h3>
          <div className="behavior-meters">
            <div className="meter"><span className="meter-label">السلوك الصفي</span><div className="meter-bar"><div className="meter-fill bg-mint" style={{ width: `${behaviorData.classroom}%` }}></div></div><span className="meter-val">{behaviorData.classroom}%</span></div>
            <div className="meter"><span className="meter-label">التفاعل الاجتماعي</span><div className="meter-bar"><div className="meter-fill bg-sky" style={{ width: `${behaviorData.social}%` }}></div></div><span className="meter-val">{behaviorData.social}%</span></div>
            <div className="meter"><span className="meter-label">المشاركة</span><div className="meter-bar"><div className="meter-fill bg-grape" style={{ width: `${behaviorData.participation}%` }}></div></div><span className="meter-val">{behaviorData.participation}%</span></div>
          </div>
          <div className="behavior-notes">
            {behaviorData.notes.map(note => (
              <div key={note.id} className={`bnote ${note.type}`}>
                {note.type === 'positive' ? <Star size={16} color="var(--color-mint)" /> : <AlertTriangle size={16} color="var(--color-sunny)" />}
                <div><p>{note.text}</p><span className="bnote-date">{note.date}</span></div>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Activity */}
        <div className="card">
          <h3><Dumbbell size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />النشاط البدني</h3>
          <div className="sport-score">
            <Activity size={32} color="var(--color-mango)" />
            <span className="sport-val">{physicalData.sportsScore}%</span>
            <span className="sport-lbl">الأداء الرياضي العام</span>
          </div>
          <div className="sports-list">
            {physicalData.activities.map(act => (
              <div key={act.id} className="sport-item">
                <span className="sport-name">{act.name}</span>
                <div className="sport-bar-wrap"><div className="sport-bar" style={{ width: `${act.score}%` }}></div></div>
                <span className="sport-status">{act.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Teacher Notes */}
        <div className="card">
          <h3><MessageSquare size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />ملاحظات المعلمة</h3>
          <div className="teacher-notes-list">
            {teacherNotes.map(note => (
              <div key={note.id} className="tnote">
                <div className={`tnote-badge ${note.type === 'achievement' ? 'bg-mint' : note.type === 'recommendation' ? 'bg-mango' : 'bg-sky'}`}>
                  {note.type === 'achievement' ? <Star size={14} color="white" /> : note.type === 'recommendation' ? <TrendingUp size={14} color="white" /> : <MessageSquare size={14} color="white" />}
                </div>
                <div className="tnote-content">
                  <p>{note.text}</p>
                  <span className="tnote-meta">{note.teacher} • {note.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildProfile;
