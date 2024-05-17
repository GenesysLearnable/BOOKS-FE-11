import React from 'react';
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import ProfilePage from './Pages/ProfilePage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
});
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/Signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: { fontSize: '16px' },
          maxWidth: '500px',
          padding: '16px 24px',
          backgroundColor: '#E6F0E6',
          color: '#003B00',
        }}
      />
    </QueryClientProvider>
  );
}
