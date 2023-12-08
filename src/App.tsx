import './App.css';
import LandingPage from './components/landing'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;