import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  AlertTriangle,
  Settings,
  Bell,
  FileText,
  Shield,
} from 'lucide-react';

export function AdminSidebar() {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'Profiles', path: '/admin/profiles' },
    { icon: AlertTriangle, label: 'Issues', path: '/admin/issues' },
    { icon: Bell, label: 'Notifications', path: '/admin/notifications' },
    { icon: FileText, label: 'Logs', path: '/admin/logs' },
    { icon: Shield, label: 'Moderation', path: '/admin/moderation' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h2 className="text-xl font-bold text-purple-600">Admin Panel</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 ${
              location.pathname === path ? 'bg-purple-50 text-purple-600' : ''
            }`}
          >
            <Icon className="w-5 h-5 mr-3" />
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}