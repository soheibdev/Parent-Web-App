import { useState, useEffect, useRef } from 'react';
import { conversationsData, autoReplies } from '../../data/mockData';
import { MessageCircle, Send, Search, Clock, CheckCheck, UserCircle } from 'lucide-react';
import './Messages.css';

const Messages = () => {
  const [conversations, setConversations] = useState(conversationsData);
  const [activeId, setActiveId] = useState(conversations[0]?.id);
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const chatEndRef = useRef(null);

  const activeConversation = conversations.find(c => c.id === activeId);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeConversation?.messages?.length]);

  const handleSend = () => {
    if (!input.trim()) return;
    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    const newMsg = { id: Date.now(), text: input, sender: 'parent', time: timeStr };

    setConversations(prev => prev.map(c =>
      c.id === activeId ? { ...c, messages: [...c.messages, newMsg] } : c
    ));
    setInput('');

    // Auto-reply after 2 seconds
    setTimeout(() => {
      const role = activeConversation.role;
      const replies = autoReplies[role] || autoReplies['معلمة'];
      const replyText = replies[Math.floor(Math.random() * replies.length)];
      const replyTime = new Date();
      const reply = { id: Date.now() + 1, text: replyText, sender: 'other', time: `${replyTime.getHours()}:${String(replyTime.getMinutes()).padStart(2, '0')}` };
      setConversations(prev => prev.map(c =>
        c.id === activeId ? { ...c, messages: [...c.messages, reply] } : c
      ));
    }, 2000);
  };

  const handleKeyPress = (e) => { if (e.key === 'Enter') handleSend(); };

  const filteredContacts = conversations.filter(c =>
    c.name.includes(searchTerm) || c.role.includes(searchTerm)
  );

  return (
    <div className="messages-page">
      <h2 className="page-title text-ink"><MessageCircle size={28} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '10px' }} />الرسائل</h2>

      <div className="messages-layout">
        {/* Contacts */}
        <div className="contacts-panel">
          <div className="contacts-search">
            <Search size={16} className="contacts-search-icon" />
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="ابحث عن محادثة..." className="contacts-search-input" />
          </div>
          <div className="contacts-list">
            {filteredContacts.map(c => (
              <div key={c.id} className={`contact-item ${c.id === activeId ? 'active-contact' : ''} ${c.unread ? 'unread' : ''}`} onClick={() => setActiveId(c.id)}>
                <div className="contact-avatar" style={{ backgroundColor: c.color }}>{c.avatar}</div>
                <div className="contact-info">
                  <div className="contact-name">{c.name}</div>
                  <div className="contact-role">{c.role}</div>
                  <div className="contact-preview">{c.messages[c.messages.length - 1]?.text.slice(0, 40)}...</div>
                </div>
                <div className="contact-meta">
                  <span className="contact-time">{c.messages[c.messages.length - 1]?.time}</span>
                  {c.unread && <span className="unread-dot"></span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="chat-panel">
          {activeConversation && (
            <>
              <div className="chat-header">
                <div className="chat-header-avatar" style={{ backgroundColor: activeConversation.color }}>
                  <UserCircle size={24} color="white" />
                </div>
                <div>
                  <div className="chat-name">{activeConversation.name}</div>
                  <div className="chat-role">{activeConversation.role}</div>
                </div>
              </div>

              <div className="chat-history">
                {activeConversation.messages.map(msg => (
                  <div key={msg.id} className={`chat-bubble ${msg.sender === 'parent' ? 'sent' : 'received'}`}>
                    <p>{msg.text}</p>
                    <div className="chat-time">
                      <Clock size={12} /> {msg.time}
                      {msg.sender === 'parent' && <CheckCheck size={14} color="rgba(255,255,255,0.7)" />}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              <div className="chat-input-area">
                <input type="text" className="chat-input" value={input} onChange={e => setInput(e.target.value)} onKeyPress={handleKeyPress} placeholder="اكتب رسالتك هنا..." />
                <button className="send-btn bg-mint" onClick={handleSend}><Send size={20} /></button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
