import React from 'react';

interface ResultFieldProps {
  label: string;
  value: string;
  unit: string;
}

const ResultField: React.FC<ResultFieldProps> = ({ label, value, unit }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium text-slate-300">
        {label}
      </label>
      <div className="relative bg-slate-900/50 border border-slate-700 rounded-lg py-3 px-4 h-[50px] flex items-center overflow-hidden">
        <p key={value} className="text-white font-mono text-lg animate-fade-in-up">
          {value}
        </p>
        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 text-sm">
          {unit}
        </span>
      </div>
    </div>
  );
};

export default ResultField;