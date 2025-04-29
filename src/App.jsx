import React, { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('add');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleNoteAdded = () => {
    setRefreshTrigger(prev => prev + 1);
    setActiveTab('view');
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>NoteKeep</h1>
      </header>

      <main>
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="content">
          {activeTab === 'add' ? (
            <AddNote onNoteAdded={handleNoteAdded} />
          ) : (
            <NotesList refreshTrigger={refreshTrigger} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
