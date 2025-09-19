import React from 'react';
import { Header } from '../Layout/Header';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';
import { FileText, Calendar, User, Eye } from 'lucide-react';

export const PatientReports: React.FC = () => {
  const reports = [
    {
      name: 'Blood Test Report',
      date: '14/09/2025',
      uploadedBy: 'Lab Technician – Mr. Rao',
      imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'X-Ray Chest Report',
      date: '10/09/2025',
      uploadedBy: 'Lab Technician – Ms. Priya',
      imageUrl: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'ECG Report',
      date: '05/09/2025',
      uploadedBy: 'Lab Technician – Mr. Kumar',
      imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Ultrasound Report',
      date: '28/08/2025',
      uploadedBy: 'Lab Technician – Dr. Singh',
      imageUrl: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'MRI Scan Report',
      date: '20/08/2025',
      uploadedBy: 'Lab Technician – Ms. Sharma',
      imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Medical Reports" showBackButton />
      
      <div className="max-w-6xl mx-auto p-6">
        <Card>
          <div className="flex items-center gap-2 mb-6">
            <FileText size={20} className="text-gray-700" />
            <h2 className="text-lg font-medium text-gray-900">Test Reports</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <div key={index} className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img 
                    src={report.imageUrl} 
                    alt={report.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="confirm" size="sm">
                      <Eye size={16} className="mr-2" />
                      View Report
                    </Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">{report.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{report.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{report.uploadedBy}</span>
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