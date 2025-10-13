import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import FlashcardStudy from './components/FlashcardStudy';
import { sampleFlashcardSets } from './sampleData';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [flashcardSets, setFlashcardSets] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Check for saved authentication state on app load
  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated');
    const savedUser = localStorage.getItem('currentUser');
    const savedSets = localStorage.getItem('flashcardSets');
    
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      setCurrentUser(savedUser ? JSON.parse(savedUser) : null);
      // Load saved sets or use sample data if no saved sets exist
      const loadedSets = savedSets ? JSON.parse(savedSets) : [];
      setFlashcardSets(loadedSets.length > 0 ? loadedSets : sampleFlashcardSets);
    }
  }, []);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setCurrentUser(userData);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('currentUser', JSON.stringify(userData));
    // Load sample data for new users
    if (flashcardSets.length === 0) {
      setFlashcardSets(sampleFlashcardSets);
      localStorage.setItem('flashcardSets', JSON.stringify(sampleFlashcardSets));
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCurrentView('dashboard');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
  };

  const saveFlashcardSets = (sets) => {
    setFlashcardSets(sets);
    localStorage.setItem('flashcardSets', JSON.stringify(sets));
  };

  const loadSampleData = () => {
    const combinedSets = [...flashcardSets, ...sampleFlashcardSets];
    // Remove duplicates based on title
    const uniqueSets = combinedSets.filter((set, index, self) => 
      index === self.findIndex(s => s.title === set.title)
    );
    setFlashcardSets(uniqueSets);
    localStorage.setItem('flashcardSets', JSON.stringify(uniqueSets));
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>📚 LearnWithMe</h1>
        </div>
        <div className="nav-menu">
          <button 
            className={currentView === 'dashboard' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentView('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={currentView === 'study' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentView('study')}
          >
            Study
          </button>
          <div className="user-info">
            <span>Welcome, {currentUser?.username}!</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {currentView === 'dashboard' && (
          <Dashboard 
            flashcardSets={flashcardSets}
            onUpdateSets={saveFlashcardSets}
            onStartStudy={() => setCurrentView('study')}
            onLoadSampleData={loadSampleData}
          />
        )}
        {currentView === 'study' && (
          <FlashcardStudy 
            flashcardSets={flashcardSets}
            onBackToDashboard={() => setCurrentView('dashboard')}
          />
        )}
      </main>
    </div>
  );
}

export default App;
