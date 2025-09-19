import React from 'react';
import { Header } from '../Layout/Header';
import { Card } from '../Common/Card';
import { Pill, Calendar, User } from 'lucide-react';

export const PatientHistory: React.FC = () => {
  const prescriptions = [
    {
      medicine: 'Paracetamol 500mg',
      quantity: '10 tablets',
      prescribedBy: 'Dr. Sharma',
      dateTime: '15/09/2025 10:30 AM'
    },
    {
      medicine: 'Amoxicillin 250mg',
      quantity: '6 tablets',
      prescribedBy: 'Dr. Reddy',
      dateTime: '12/09/2025 03:15 PM'
    },
    {
      medicine: 'Ibuprofen 400mg',
      quantity: '8 tablets',
      prescribedBy: 'Dr. Patel',
      dateTime: '08/09/2025 11:00 AM'
    },
    {
      medicine: 'Cetirizine 10mg',
      quantity: '5 tablets',
      prescribedBy: 'Dr. Mehta',
      dateTime: '05/09/2025 02:00 PM'
    },
    {
      medicine: 'Vitamin D3',
      quantity: '20 tablets',
      prescribedBy: 'Dr. Khan',
      dateTime: '01/09/2025 09:45 AM'
    },
    {
      medicine: 'Pantoprazole 40mg',
      quantity: '15 tablets',
      prescribedBy: 'Dr. Das',
      dateTime: '28/08/2025 04:10 PM'
    },
    {
      medicine: 'Azithromycin 500mg',
      quantity: '3 tablets',
      prescribedBy: 'Dr. Roy',
      dateTime: '24/08/2025 05:00 PM'
    },
    {
      medicine: 'Montelukast 10mg',
      quantity: '7 tablets',
      prescribedBy: 'Dr. Gupta',
      dateTime: '20/08/2025 12:30 PM'
    },
    {
      medicine: 'Aspirin 75mg',
      quantity: '10 tablets',
      prescribedBy: 'Dr. Sen',
      dateTime: '17/08/2025 09:00 AM'
    },
    {
      medicine: 'Levocetirizine 5mg',
      quantity: '10 tablets',
      prescribedBy: 'Dr. Joshi',
      dateTime: '12/08/2025 06:15 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header title="Prescription History" showBackButton />
      
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <div className="flex items-center gap-2 mb-6">
            <Pill size={20} className="text-black" />
            <h2 className="text-lg font-medium text-black">Last 10 Prescriptions</h2>
          </div>
          
          <div className="space-y-3">
            {prescriptions.map((prescription, index) => (
              <div key={index} className="p-4 border border-black hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Pill size={16} className="text-black" />
                      <h3 className="font-medium text-black">{prescription.medicine}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Quantity: {prescription.quantity}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>Prescribed by {prescription.prescribedBy}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{prescription.dateTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};