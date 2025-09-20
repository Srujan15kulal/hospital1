import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../Layout/Header';
import { Card } from '../Common/Card';
import { Button } from '../Common/Button';
import { ArrowLeft } from 'lucide-react';
import { getPatientReports } from '../../data/patientData';

export const ReportImagePage: React.FC = () => {
  const { patientId, reportName } = useParams<{ patientId: string; reportName: string }>();
  const navigate = useNavigate();

  const reports = getPatientReports(patientId || '');
  const report = reports.find(r => 
    r.name.toLowerCase().replace(/\s+/g, '-') === reportName
  );

  const handleBack = () => {
    navigate(`/doctor/patient/${patientId}`);
  };

  if (!report) {
    return (
      <div className="min-h-screen bg-white">
        <Header title="Report Not Found" showBackButton />
        <div className="max-w-4xl mx-auto p-6">
          <Card>
            <p className="text-center text-gray-600">Report not found.</p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header title={`${report.name} Report`} showBackButton />
      
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="outline" 
              onClick={handleBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Patient Profile
            </Button>
            <div>
              <h2 className="text-xl font-semibold text-black">{report.name} Report</h2>
              <p className="text-gray-600">Date: {report.date} • Requested by {report.requestedBy}</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gray-100 p-8 mb-4">
              <img
                src={report.imageUrl}
                alt={report.name}
                className="max-w-full h-auto mx-auto"
                style={{ maxHeight: '600px' }}
              />
            </div>
            
            <div className="flex justify-center gap-4">
              <Button variant="outline">
                Download Report
              </Button>
              <Button variant="outline">
                Print Report
              </Button>
              <Button>
                Share Report
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};