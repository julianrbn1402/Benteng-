import React from 'react';

const BentengLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 250 40" 
    fill="currentColor" 
    {...props}
  >
    <path 
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 40 h250 v-15 h-15 v-5 h-10 v5 h-10 v-5 h-10 v5 H180 v-15 h-15 v-5 h-10 v5 h-10 v-5 h-10 v5 H110 V5 h-10 V0 h-10 V5 h-10 V0 h-10 V5 H50 v15 H35 v-5 h-10 v5 h-10 v-5 h-10 v5 H0 z M90 40 v-12 a15 15 0 0 1 30 0 v12 h-30z" 
    />
  </svg>
);

export default BentengLogo;