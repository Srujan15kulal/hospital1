import React from 'react';
import { Header } from '../Layout/Header';
import { Card } from '../Common/Card';
import { AlertTriangle } from 'lucide-react';

export const PatientAllergies: React.FC = () => {
  const allergies = [
    {
      name: 'Penicillin Allergy',
      severity: 'High',
      description: 'Severe allergic reaction to penicillin-based antibiotics'
    },
    {
      name: 'Peanut Allergy',
      severity: 'High',
      description: 'Anaphylactic reaction to peanuts and peanut products'
    },
    {
      name: 'Sulfa Drugs Allergy',
      severity: 'Medium',
      description: 'Allergic reaction to sulfonamide medications'
    },
    {
      name: 'Latex Allergy',
      severity: 'Medium',
      description: 'Contact dermatitis from latex products'
    },
    {
      name: 'Pollen Allergy',
      severity: 'Low',
      description: 'Seasonal allergic rhinitis from tree and grass pollen'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'Medium':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'Low':
        return 'bg-green-50 border-green-200 text-green-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Allergies & Reactions" showBackButton />
      
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle size={20} className="text-red-600" />
            <h2 className="text-lg font-medium text-gray-900">Known Allergies</h2>
          </div>
          
          <div className="space-y-4">
            {allergies.map((allergy, index) => (
              <div key={index} className={`p-4 border rounded-lg ${getSeverityColor(allergy.severity)}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={16} />
                    <h3 className="font-medium">{allergy.name}</h3>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-white bg-opacity-50">
                    {allergy.severity} Risk
                  </span>
                </div>
                <p className="text-sm opacity-80">{allergy.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-red-600" />
              <h3 className="font-medium text-red-900">Important Notice</h3>
            </div>
            <p className="text-sm text-red-800">
              Please inform all healthcare providers about these allergies before any treatment or medication is administered.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};