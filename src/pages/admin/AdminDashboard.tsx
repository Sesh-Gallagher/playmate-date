import React from 'react';
import { AdminMetrics } from '../../components/admin/metrics/AdminMetrics';
import { AdminSidebar } from '../../components/admin/layout/AdminSidebar';
import { useAdminAuth } from '../../hooks/useAdminAuth';
import { Navigate } from 'react-router-dom';

export function AdminDashboard() {
  const { isAdmin, isLoading } = useAdminAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
          <AdminMetrics />
        </div>
      </div>
    </div>
  );
}