import React from 'react';

interface InputFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unit: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, value, onChange, unit, placeholder }) => {
  return (
    <div className="flex flex-col group">
      <label htmlFor={id} className="mb-2 text-sm font-medium text-slate-300 group-focus-within:text-cyan-400 transition-colors">
        {label}
      </label>
      <div className="relative">
        <input
          type="number"
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-slate-900/50 text-white placeholder-slate-500 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
          min="0"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 text-sm">
          {unit}
        </span>
      </div>
    </div>
  );
};

export default InputField;