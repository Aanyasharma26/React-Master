import React, { useState } from 'react';

const AddNote = ({ onNoteAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (title && content) {
      const existingNotes = JSON.parse(localStorage.getItem('notes') || '[]');
      existingNotes.push({ title, content });
      localStorage.setItem('notes', JSON.stringify(existingNotes));
      setTitle('');
      setContent('');
      onNoteAdded();
    }
  };

  return (
    <div className="note-form">
      <label>Title</label>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter note title" />

      <label>Content</label>
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Write your note here..." />

      <button className="save-button"onClick={handleSave}>Save Note</button>
    </div>
  );
};

export default AddNote;
