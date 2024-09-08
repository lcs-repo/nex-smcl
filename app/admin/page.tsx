'use client'

import { useState, useEffect } from 'react';
import AdminLogin from '../components/AdminLogin';
import ChatManagement from '../components/ChatManagement';
import { checkAdminAuth } from '../utils/auth';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await checkAdminAuth();
      setIsAuthenticated(auth);
    };
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <ChatManagement />
    </div>
  );
}