import './styles/App.css';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import ErrorPage from './components/ErrorPage';

import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBookPage from './components/AddBookPage';
import LoadingPage from './components/LoadingPage';

function App() {

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    <LoadingPage />
  }

  return (
    <BrowserRouter >
      <div className="App">
        <Routes>
          <Route path="/" element={isAuthenticated ? <HomePage /> : <LandingPage />} />
          <Route path="addbook" element={isAuthenticated ? <AddBookPage /> : <ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
