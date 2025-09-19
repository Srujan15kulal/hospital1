import React from 'react';
import { Header } from '../Layout/Header';
import { Card } from '../Common/Card';
import { User, Phone, Mail, MapPin, Award, Calendar, Clock } from 'lucide-react';
import { mockDoctors } from '../../data/mockData';

export const DoctorProfile: React.FC = () => {
  const doctor = mockDoctors[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Doctor Profile" showBackButton />
      
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-shrink-0">
              <img
                src={doctor.photo_url}
                alt={doctor.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl font-medium text-gray-900 mb-2">{doctor.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{doctor.qualification}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Award size={16} />
                  <span className="text-sm">Specialization: {doctor.department}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone size={16} />
                  <span className="text-sm">{doctor.contact_number}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail size={16} />
                  <span className="text-sm">dr.anita.sharma@hospital.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={16} />
                  <span className="text-sm">Room 205, Block A</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-medium text-gray-900">8+</h3>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-medium text-gray-900">1,200+</h3>
              <p className="text-sm text-gray-600">Patients Treated</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-medium text-gray-900">4.9</h3>
              <p className="text-sm text-gray-600">Patient Rating</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">About</h3>
              <p className="text-gray-700 leading-relaxed">
                Dr. Anita Sharma is a highly experienced dermatologist with over 8 years of practice in treating various skin conditions. 
                She specializes in cosmetic dermatology, acne treatment, and skin cancer screening. Dr. Sharma is known for her 
                patient-centered approach and commitment to providing the highest quality care.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Education & Certifications</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-gray-600" />
                  <span className="text-gray-700">MBBS - All India Institute of Medical Sciences (2015)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-gray-600" />
                  <span className="text-gray-700">MD Dermatology - Post Graduate Institute (2018)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-gray-600" />
                  <span className="text-gray-700">Fellowship in Cosmetic Dermatology (2019)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Working Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-600" />
                  <span className="text-gray-700">Monday - Friday</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-600" />
                  <span className="text-gray-700">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-600" />
                  <span className="text-gray-700">Saturday</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-600" />
                  <span className="text-gray-700">9:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {['Acne Treatment', 'Skin Cancer Screening', 'Cosmetic Dermatology', 'Psoriasis', 'Eczema', 'Hair Loss Treatment'].map((specialization) => (
                  <span key={specialization} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {specialization}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};