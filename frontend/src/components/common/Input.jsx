import React from 'react';

const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`clay-input w-full px-4 py-2 bg-bg text-text-primary text-xs ${className}`}
      {...props}
    />
  );
};

export default Input;
