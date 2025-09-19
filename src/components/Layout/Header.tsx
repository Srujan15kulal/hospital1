import React from 'react';
import { ArrowLeft, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, showBackButton = false }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (location.pathname.includes('/patient/')) {
      navigate('/patient/dashboard');
    } else if (location.pathname.includes('/doctor/')) {
      navigate('/doctor/dashboard');
    } else if (location.pathname.includes('/hospital/')) {
      navigate('/hospital/dashboard');
    } else if (location.pathname.includes('/pharmacy/')) {
      navigate('/pharmacy/dashboard');
    } else if (location.pathname.includes('/lab/')) {
      navigate('/lab/dashboard');
    } else {
      navigate(-1);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getRoleDisplayName = (role: string) => {
    const roleMap: { [key: string]: string } = {
      doctor: 'Doctor',
      patient: 'Patient',
      hospital: 'Hospital Staff',
      pharmacist: 'Pharmacist',
      lab_technician: 'Lab Technician'
    };
    return roleMap[role] || role;
  };

  return (
    <header className="bg-white border-b border-gray-100 px-4 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          {showBackButton && (
            <button
              onClick={handleBack}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} className="text-gray-700" />
            </button>
          )}
          <div>
            <h1 className="text-xl font-medium text-gray-900">{title}</h1>
            {user && (
              <p className="text-sm text-gray-500">
                {getRoleDisplayName(user.role)} Portal
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {user && (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-full">
                <User size={16} className="text-gray-600" />
                <span className="text-sm text-gray-700">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};