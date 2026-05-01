import { useState } from 'react';
import { homeworkData } from '../../data/mockData';
import { BookOpen, CheckCircle, Clock, AlertCircle, FileText, Eye } from 'lucide-react';
import './Homework.css';

const Homework = () => {
  const [filter, setFilter] = useState('all');
  const [selectedHw, setSelectedHw] = useState(null);

  const filtered = filter === 'all' ? homeworkData :
    filter === 'مكتمل' ? homeworkData.filter(h => h.status === 'مكتمل') :
    homeworkData.filter(h => h.status !== 'مكتمل');

  const statusIcon = (status) => {
    if (status === 'مكتمل') return <CheckCircle size={18} color="var(--color-mint)" />;
    if (status === 'قيد التنفيذ') return <Clock size={18} color="var(--color-sunny)" />;
    return <AlertCircle size={18} color="var(--color-coral)" />;
  };

  const statusClass = (status) => {
    if (status === 'مكتمل') return 'status-done';
    if (status === 'قيد التنفيذ') return 'status-progress';
    return 'status-pending';
  };

  return (
    <div className="homework-page">
      <h2 className="page-title text-ink"><BookOpen size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />الواجبات والمهام</h2>

      {/* Filter Tabs */}
      <div className="hw-filters">
        <button className={`hw-filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>الكل ({homeworkData.length})</button>
        <button className={`hw-filter ${filter === 'مكتمل' ? 'active' : ''}`} onClick={() => setFilter('مكتمل')}>مكتمل ({homeworkData.filter(h => h.status === 'مكتمل').length})</button>
        <button className={`hw-filter ${filter === 'pending' ? 'active' : ''}`} onClick={() => setFilter('pending')}>قيد الانتظار ({homeworkData.filter(h => h.status !== 'مكتمل').length})</button>
      </div>

      {/* Homework List */}
      <div className="hw-list">
        {filtered.map(hw => (
          <div key={hw.id} className="hw-card card">
            <div className="hw-card-header">
              <div className="hw-info">
                <div className="hw-icon"><FileText size={20} color="var(--color-sky)" /></div>
                <div>
                  <h3>{hw.title}</h3>
                  <span className="hw-subject">{hw.subject}</span>
                </div>
              </div>
              <div className="hw-right">
                <span className={`hw-status-badge ${statusClass(hw.status)}`}>{statusIcon(hw.status)} {hw.status}</span>
                {hw.grade && <span className="hw-grade">{hw.grade}/100</span>}
              </div>
            </div>
            <div className="hw-card-body">
              <p className="hw-desc">{hw.description}</p>
              <div className="hw-meta">
                <span><Clock size={14} /> تاريخ التسليم: {hw.dueDate}</span>
                <button className="btn btn-outline btn-sm" onClick={() => setSelectedHw(hw)}><Eye size={14} /> عرض التفاصيل</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedHw && (
        <div className="modal-overlay" onClick={() => setSelectedHw(null)}>
          <div className="modal-card card" onClick={e => e.stopPropagation()}>
            <h3><FileText size={20} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />{selectedHw.title}</h3>
            <div className="modal-detail">
              <div className="detail-row"><strong>المادة:</strong> {selectedHw.subject}</div>
              <div className="detail-row"><strong>الحالة:</strong> <span className={`hw-status-badge ${statusClass(selectedHw.status)}`}>{selectedHw.status}</span></div>
              <div className="detail-row"><strong>تاريخ التسليم:</strong> {selectedHw.dueDate}</div>
              {selectedHw.grade && <div className="detail-row"><strong>الدرجة:</strong> {selectedHw.grade}/100</div>}
              <div className="detail-row"><strong>الوصف:</strong> {selectedHw.description}</div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '16px', width: '100%' }} onClick={() => setSelectedHw(null)}>إغلاق</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homework;
