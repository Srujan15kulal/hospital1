import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, UserCheck, Building, Pill, FlaskConical } from 'lucide-react';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';

export const RoleSelector: React.FC = () => {
  const navigate = useNavigate();

  const roles = [
    {
      id: 'doctor',
      title: 'Doctor',
      description: 'Access patient records, appointments, and medical tools',
      icon: UserCheck,
      path: '/login/doctor'
    },
    {
      id: 'patient',
      title: 'Patient',
      description: 'View your medical history, appointments, and test results',
      icon: Users,
      path: '/login/patient'
    },
    {
      id: 'hospital',
      title: 'Hospital / Reception',
      description: 'Manage patient registrations and hospital operations',
      icon: Building,
      path: '/login/hospital'
    },
    {
      id: 'pharmacist',
      title: 'Pharmacist',
      description: 'Manage prescriptions and medication inventory',
      icon: Pill,
      path: '/login/pharmacist'
    },
    {
      id: 'lab_technician',
      title: 'Lab Technician',
      description: 'Handle test requests and upload lab results',
      icon: FlaskConical,
      path: '/login/lab'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Health Portal</h1>
          <p className="text-xl text-gray-600">Hospital Management System</p>
          <p className="text-gray-500 mt-2">Select your role to continue</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <Card key={role.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{role.description}</p>
                  <Button
                    fullWidth
                    onClick={() => navigate(role.path)}
                  >
                    Sign In
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};