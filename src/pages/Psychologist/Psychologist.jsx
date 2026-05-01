import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Brain, CheckCircle, Clock, AlertCircle, TrendingUp, Heart, MessageSquare } from 'lucide-react';
import { psychologistData } from '../../data/mockData';
import './Psychologist.css';

const Psychologist = () => {
  const { name, specialization, recommendations, progressNotes, behaviorTracking } = psychologistData;

  const statusIcon = (status) => {
    if (status === 'مكتمل') return <CheckCircle size={18} color="var(--color-mint)" />;
    if (status === 'قيد التنفيذ') return <Clock size={18} color="var(--color-sunny)" />;
    return <AlertCircle size={18} color="var(--color-coral)" />;
  };

  return (
    <div className="psych-page">
      <h2 className="page-title text-ink"><Brain size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />متابعة الأخصائي النفسي</h2>

      {/* Psychologist Info */}
      <div className="psych-info card">
        <div className="psych-avatar bg-grape"><Brain size={32} color="white" /></div>
        <div>
          <h3>{name}</h3>
          <p>{specialization}</p>
        </div>
      </div>

      <div className="psych-grid">
        {/* Recommendations */}
        <div className="card">
          <h3><Heart size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />التوصيات والنصائح</h3>
          <div className="rec-list">
            {recommendations.map(rec => (
              <div key={rec.id} className="rec-item">
                <div className="rec-icon">{statusIcon(rec.status)}</div>
                <div className="rec-body">
                  <p>{rec.text}</p>
                  <div className="rec-meta">
                    <span className={`rec-status ${rec.status === 'مكتمل' ? 'st-done' : rec.status === 'قيد التنفيذ' ? 'st-prog' : 'st-new'}`}>{rec.status}</span>
                    <span className={`rec-priority ${rec.priority === 'عالي' ? 'pri-high' : 'pri-med'}`}>أولوية: {rec.priority}</span>
                    <span className="rec-date">{rec.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Chart */}
        <div className="card">
          <h3><TrendingUp size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />تتبع التطور</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={behaviorTracking}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis hide domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="confidence" stroke="var(--color-mint)" strokeWidth={3} name="الثقة" dot={{ r: 5 }} />
              <Line type="monotone" dataKey="social" stroke="var(--color-sky)" strokeWidth={3} name="اجتماعي" dot={{ r: 5 }} />
              <Line type="monotone" dataKey="emotional" stroke="var(--color-grape)" strokeWidth={3} name="عاطفي" dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="chart-legend">
            <span><span className="ldot" style={{ background: 'var(--color-mint)' }}></span>الثقة بالنفس</span>
            <span><span className="ldot" style={{ background: 'var(--color-sky)' }}></span>التفاعل الاجتماعي</span>
            <span><span className="ldot" style={{ background: 'var(--color-grape)' }}></span>النضج العاطفي</span>
          </div>
        </div>

        {/* Progress Notes */}
        <div className="card psych-notes-card">
          <h3><MessageSquare size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />ملاحظات التقدم</h3>
          <div className="pnotes-list">
            {progressNotes.map(note => (
              <div key={note.id} className="pnote-item">
                <div className="pnote-dot"></div>
                <div>
                  <p>{note.text}</p>
                  <span className="pnote-date">{note.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Psychologist;
