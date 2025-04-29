import React, { useEffect, useState } from 'react';

const NotesList = ({ refreshTrigger }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    setNotes(storedNotes);
  }, [refreshTrigger]);

  const handleDelete = (indexToDelete) => {
    const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        notes.map((note, index) => (
          <div className="note-card" key={index}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
