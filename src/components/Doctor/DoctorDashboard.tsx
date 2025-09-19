import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Layout/Header';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';
import { Calendar, Clock, User } from 'lucide-react';
import { mockDoctors, mockAppointments } from '../../data/mockData';

export const DoctorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const doctor = mockDoctors[0]; // Current doctor data

  const handlePatientClick = (patientId: string) => {
    navigate(`/doctor/patient/${patientId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Doctor Dashboard" />
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Doctor Profile */}
          <Card>
            <div className="text-center">
              <img
                src={doctor.photo_url}
                alt={doctor.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{doctor.qualification}</p>
              <p className="text-sm font-medium text-blue-600 mb-2">{doctor.department}</p>
              <p className="text-sm text-gray-500">{doctor.contact_number}</p>
            </div>
          </Card>

          {/* Today's Schedule */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={20} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900">Today's Schedule</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total Appointments</span>
                <span className="font-medium">{mockAppointments.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Next Available</span>
                <span className="font-medium">11:00 AM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Working Hours</span>
                <span className="font-medium">9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </Card>

          {/* Quick Stats */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Patients Today</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Pending Reports</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Consultations</span>
                <span className="font-medium">8</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Appointments List */}
        <Card className="mt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Today's Appointments</h3>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </div>

          <div className="space-y-4">
            {mockAppointments.map((appointment) => (
              <div
                key={appointment.appointment_id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => handlePatientClick(appointment.patient_id)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{appointment.patient_name}</h4>
                    <p className="text-sm text-gray-600">{appointment.reason}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{appointment.time}</p>
                  <p className="text-sm text-gray-600">Age: {appointment.age}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};