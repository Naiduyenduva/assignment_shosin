import React from 'react';

const Card1 = ({ text,description, number, variant = 'primary', tVariant='primary', }) => {
  const baseStyles = 'sm:w-204 h-130 rounded-xl py-3 pl-5 pr-3 grid';
  const variantStyles = {
    primary: 'bg-custombg1',
    secondary: 'bg-custombg2',
    danger: 'bg-custombg3',
  };
  const textVariant = {
    primary: 'text-textcolor1',
    secondary: 'text-textcolor2',
    danger: 'text-textcolor3'
  };

  return (
      <div className={`${baseStyles} gap- ${variantStyles[variant]}`}>
                <h1 className='font-medium text-lg'>{text}</h1>
                <h1 className='font-bold text-4xl'>{number}</h1>
                <h2 className={`font-normal text-base ${textVariant[tVariant]}`}>{description}</h2>
            </div>
  );
};

export default Card1;
