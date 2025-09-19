import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../Common/Button';
import { FormField } from '../Common/FormField';
import { Card } from '../Common/Card';

interface LoginFormProps {
  role: 'doctor' | 'patient' | 'hospital' | 'pharmacist' | 'lab_technician';
}

export const LoginForm: React.FC<LoginFormProps> = ({ role }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const roleConfig = {
    doctor: {
      title: 'Doctor Login',
      usernameLabel: 'Doctor ID / Email',
      usernamePlaceholder: 'dr.anita@hospital.com',
      dashboardPath: '/doctor/dashboard',
      userData: { id: 'D-501', role: 'doctor' as const, name: 'Dr. Anita Sharma' }
    },
    patient: {
      title: 'Patient Login',
      usernameLabel: 'Phone Number',
      usernamePlaceholder: '+91 9876543210',
      dashboardPath: '/patient/dashboard',
      userData: { id: 'P-1001', role: 'patient' as const, name: 'Ravi Kumar' }
    },
    hospital: {
      title: 'Hospital Staff Login',
      usernameLabel: 'Staff ID',
      usernamePlaceholder: 'H-001',
      dashboardPath: '/hospital/dashboard',
      userData: { id: 'H-001', role: 'hospital' as const, name: 'Reception Staff' }
    },
    pharmacist: {
      title: 'Pharmacist Login',
      usernameLabel: 'Employee ID',
      usernamePlaceholder: 'PH-001',
      dashboardPath: '/pharmacy/dashboard',
      userData: { id: 'PH-001', role: 'pharmacist' as const, name: 'Pharmacy Staff' }
    },
    lab_technician: {
      title: 'Lab Technician Login',
      usernameLabel: 'Employee ID',
      usernamePlaceholder: 'LAB-001',
      dashboardPath: '/lab/dashboard',
      userData: { id: 'LAB-001', role: 'lab_technician' as const, name: 'Lab Technician' }
    }
  };

  const config = roleConfig[role];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, this would validate credentials
    login(config.userData);
    navigate(config.dashboardPath);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name || 'username']: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{config.title}</h1>
          <p className="text-gray-600">Health Portal Management System</p>
        </div>

        <form onSubmit={handleSubmit}>
          <FormField
            label={config.usernameLabel}
            name="username"
            type="text"
            placeholder={config.usernamePlaceholder}
            value={credentials.username}
            onChange={handleChange}
            required
          />

          <FormField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleChange}
            required
          />

          <Button type="submit" fullWidth className="mb-4">
            Sign In
          </Button>

          <div className="text-center">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};