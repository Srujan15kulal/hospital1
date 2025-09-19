import React from 'react';
import { Header } from '../Layout/Header';
import { Card } from '../Common/Card';
import { AlertTriangle } from 'lucide-react';

export const PatientAllergies: React.FC = () => {
  const allergies = [
    {
      name: 'Peanuts',
      severity: 'High',
      description: 'Severe allergic reaction to peanuts and peanut products'
    },
    {
      name: 'Penicillin',
      severity: 'High',
      description: 'Severe allergic reaction to penicillin-based antibiotics'
    },
    {
      name: 'Dust',
      severity: 'Medium',
      description: 'Allergic reaction to dust mites and particles'
    },
    {
      name: 'Pollen',
      severity: 'Low',
      description: 'Seasonal allergic rhinitis from tree and grass pollen'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'border-black bg-gray-100';
      case 'Medium':
        return 'border-black bg-gray-50';
      case 'Low':
        return 'border-black bg-white';
      default:
        return 'border-black bg-white';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header title="Allergies & Reactions" showBackButton />
      
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle size={20} className="text-black" />
            <h2 className="text-lg font-medium text-black">Known Allergies</h2>
          </div>
          
          <div className="space-y-4">
            {allergies.map((allergy, index) => (
              <div key={index} className={`p-4 border ${getSeverityColor(allergy.severity)}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-black" />
                    <h3 className="font-medium text-black">{allergy.name}</h3>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium border border-black text-black">
                    {allergy.severity} Risk
                  </span>
                </div>
                <p className="text-sm text-gray-600">{allergy.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 border border-black">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-black" />
              <h3 className="font-medium text-black">Important Notice</h3>
            </div>
            <p className="text-sm text-gray-600">
              Please inform all healthcare providers about these allergies before any treatment or medication is administered.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};