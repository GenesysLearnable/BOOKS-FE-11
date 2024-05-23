import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import GlobalStyle from './styles/GlobalStyles';
import Homepage from './Pages/Homepage';
import ProfilePage from './Pages/ProfilePage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import Searchpage from './Pages/Searchpage.js';
import ForgotPasswordPage from './Pages/ForgotPasswordPage.jsx';
import ResetPassword from './Pages/ResetPassword.jsx';
import NewPasswordPage from './Pages/NewPasswordPage.jsx';
import PageNotFound from './Pages/PageNotFound.jsx';
import { BookContext } from './Components/context/BookContext.jsx';
import { UserData } from './Components/context/UserData.jsx';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookContext>
        <UserData>
          <GlobalStyle />
          <Router>
            <Routes>
              <Route index element={<Navigate replace to="login" />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="home" element={<Homepage />} />
              <Route path="signup" element={<SignUpPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="search" element={<Searchpage />} />
              <Route path="forgotPassword" element={<ForgotPasswordPage />} />
              <Route path="resetPassword" element={<ResetPassword />} />
              <Route path="resetPassword/:id" element={<NewPasswordPage />} />
              <Route path="*" element={<PageNotFound />} />
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
        </UserData>
      </BookContext>
    </QueryClientProvider>
  );
}
