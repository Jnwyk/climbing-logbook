import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router';
import './index.css';
import Layout from './components/Layout';
import LogbookPage from './pages/LogbookPage';
import ExplorePage from './pages/ExplorePage';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/logbook" replace />} />
        <Route path="/logbook" element={<LogbookPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
