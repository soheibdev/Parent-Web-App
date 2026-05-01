import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { scheduleData, eventsData } from '../../data/mockData';
import './Schedule.css';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="schedule-page">
      <h2 className="page-title text-ink"><Calendar size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />الجدول والفعاليات</h2>

      <div className="schedule-grid">
        {/* Weekly Schedule */}
        <div className="card">
          <h3><Clock size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />الجدول الأسبوعي</h3>
          <div className="day-tabs">
            {scheduleData.map((day, i) => (
              <button key={day.id} className={`day-tab ${i === activeDay ? 'active' : ''}`} onClick={() => setActiveDay(i)}>
                {day.day}
              </button>
            ))}
          </div>
          <div className="lessons-timeline">
            {scheduleData[activeDay].lessons.map((lesson, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-time">{lesson.time}</div>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{lesson.subject}</h4>
                  <p><GraduationCap size={14} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />{lesson.teacher}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="card">
          <h3><Calendar size={18} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }} />الفعاليات القادمة</h3>
          <div className="events-list">
            {eventsData.map(event => (
              <div key={event.id} className={`event-card ${event.type === 'meeting' ? 'event-meeting' : 'event-activity'}`}>
                <div className={`event-icon-box ${event.type === 'meeting' ? 'bg-sky' : 'bg-mango'}`}>
                  {event.type === 'meeting' ? <Users size={20} color="white" /> : <GraduationCap size={20} color="white" />}
                </div>
                <div className="event-details">
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                  <div className="event-meta">
                    <span><Calendar size={14} /> {event.date}</span>
                    <span><Clock size={14} /> {event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
