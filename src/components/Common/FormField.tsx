import React from 'react';

interface FormFieldProps {
  label: string;
  name?: string;
  type: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  options?: string[];
  required?: boolean;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  options,
  required = false,
  className = ''
}) => {
  const baseInputClasses = 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';
  const baseInputClasses = 'w-full px-3 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-black';

  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-black">*</span>}
      </label>
      
      {type === 'select' && options ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={baseInputClasses}
          required={required}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseInputClasses} min-h-[100px] resize-vertical`}
          required={required}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseInputClasses}
          required={required}
        />
      )}
    </div>
  );
};