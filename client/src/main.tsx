import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router';
import './index.css';
import Layout from './components/Layout';
import LogbookPage from './pages/LogbookPage';
import ExplorePage from './pages/ExplorePage';
import HomePage from './pages/HomePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthProvider';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/logbook" element={<LogbookPage />} />
            <Route path="/explore" element={<ExplorePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>,
);
