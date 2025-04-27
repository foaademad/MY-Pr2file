import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider } from './context/NavigationContext';
import HomePage from './pages/HomePage';
import AllProjects from './components/AllProjects';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <NavigationProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </NavigationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;