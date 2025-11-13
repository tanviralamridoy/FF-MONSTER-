import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { GuildDataProvider } from './contexts/GuildDataContext';
import Login from './pages/Login';
import GuildHome from './pages/GuildHome';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import GuildProfile from './pages/GuildProfile';
import Tournaments from './pages/Tournaments';
import Navbar from './components/Navbar';
import { ADMIN_UID } from './constants';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return <div className="text-center p-10">Loading...</div>;
  }
  return currentUser ? <>{children}</> : <Navigate to="/login" />;
};

const ManagementRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, loading } = useAuth();
   if (loading) {
    return <div className="text-center p-10">Loading...</div>;
  }
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  const canAccess = Object.values(currentUser.permissions).some(p => p === true);
  return canAccess ? <>{children}</> : <Navigate to="/" />;
};

function App() {
  return (
    <GuildDataProvider>
      <AuthProvider>
        <HashRouter>
          <div className="min-h-screen bg-gray-900 text-gray-100 font-serif">
            <Navbar />
            <main className="container mx-auto p-4 md:p-6">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <GuildHome />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/profile/:uid"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
                 <Route
                  path="/guild-profile"
                  element={
                    <PrivateRoute>
                      <GuildProfile />
                    </PrivateRoute>
                  }
                />
                 <Route
                  path="/tournaments"
                  element={
                    <PrivateRoute>
                      <Tournaments />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <ManagementRoute>
                      <AdminDashboard />
                    </ManagementRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        </HashRouter>
      </AuthProvider>
    </GuildDataProvider>
  );
}

export default App;