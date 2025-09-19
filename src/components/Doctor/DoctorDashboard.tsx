import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Layout/Header';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';
import { Calendar, Clock, User, Users, FileText } from 'lucide-react';
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          {/* Doctor Profile */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <User size={20} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900">Doctor Profile</h3>
            </div>
            <div className="text-center">
              <img
                src={doctor.photo_url}
                alt={doctor.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
              />
              <h4 className="font-medium text-gray-900 mb-1">{doctor.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{doctor.qualification}</p>
              <p className="text-sm font-medium text-blue-600 mb-2">{doctor.department}</p>
              <p className="text-sm text-gray-500">{doctor.contact_number}</p>
            </div>
          </Card>

          {/* Appointments */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={20} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900">Appointments</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total Appointments</span>
                <span className="font-medium">{mockAppointments.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Completed</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Pending</span>
                <span className="font-medium">4</span>
              </div>
            </div>
          </Card>

          {/* Schedule */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Clock size={20} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900">Schedule</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Working Hours</span>
                <span className="font-medium text-sm">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Next Available</span>
                <span className="font-medium text-sm">11:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Break Time</span>
                <span className="font-medium text-sm">1:00 - 2:00 PM</span>
              </div>
            </div>
          </Card>

          {/* Patient Information */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Users size={20} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900">Patient Info</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Patients</span>
                <span className="font-medium">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">New This Week</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Follow-ups</span>
                <span className="font-medium">8</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Today's Appointments */}
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