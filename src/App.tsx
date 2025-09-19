import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Components
import { RoleSelector } from './components/Home/RoleSelector';
import { LoginForm } from './components/Auth/LoginForm';
import { DoctorDashboard } from './components/Doctor/DoctorDashboard';
import { PatientDetail } from './components/Doctor/PatientDetail';
import { PatientDashboard } from './components/Patient/PatientDashboard';
import { HospitalDashboard } from './components/Hospital/HospitalDashboard';
import { PatientRegistration } from './components/Hospital/PatientRegistration';
import { PharmacyDashboard } from './components/Pharmacy/PharmacyDashboard';
import { LabDashboard } from './components/Lab/LabDashboard';
import { BillingPage } from './components/Billing/BillingPage';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode; allowedRoles: string[] }> = ({ 
  children, 
  allowedRoles 
}) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated || !user) {
    return <Navigate to="/" replace />;
  }
  
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<RoleSelector />} />
      
      {/* Login Routes */}
      <Route path="/login/doctor" element={<LoginForm role="doctor" />} />
      <Route path="/login/patient" element={<LoginForm role="patient" />} />
      <Route path="/login/hospital" element={<LoginForm role="hospital" />} />
      <Route path="/login/pharmacist" element={<LoginForm role="pharmacist" />} />
      <Route path="/login/lab" element={<LoginForm role="lab_technician" />} />
      
      {/* Doctor Routes */}
      <Route 
        path="/doctor/dashboard" 
        element={
          <ProtectedRoute allowedRoles={['doctor']}>
            <DoctorDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/doctor/patient/:patientId" 
        element={
          <ProtectedRoute allowedRoles={['doctor']}>
            <PatientDetail />
          </ProtectedRoute>
        } 
      />
      
      {/* Patient Routes */}
      <Route 
        path="/patient/dashboard" 
        element={
          <ProtectedRoute allowedRoles={['patient']}>
            <PatientDashboard />
          </ProtectedRoute>
        } 
      />
      
      {/* Hospital Routes */}
      <Route 
        path="/hospital/dashboard" 
        element={
          <ProtectedRoute allowedRoles={['hospital']}>
            <HospitalDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/registration" 
        element={
          <ProtectedRoute allowedRoles={['hospital']}>
            <PatientRegistration />
          </ProtectedRoute>
        } 
      />
      
      {/* Pharmacy Routes */}
      <Route 
        path="/pharmacy/dashboard" 
        element={
          <ProtectedRoute allowedRoles={['pharmacist']}>
            <PharmacyDashboard />
          </ProtectedRoute>
        } 
      />
      
      {/* Lab Routes */}
      <Route 
        path="/lab/dashboard" 
        element={
          <ProtectedRoute allowedRoles={['lab_technician']}>
            <LabDashboard />
          </ProtectedRoute>
        } 
      />
      
      {/* Billing Routes */}
      <Route 
        path="/billing/invoice/:invoiceId" 
        element={
          <ProtectedRoute allowedRoles={['hospital', 'patient', 'pharmacist']}>
            <BillingPage />
          </ProtectedRoute>
        } 
      />
      
      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;