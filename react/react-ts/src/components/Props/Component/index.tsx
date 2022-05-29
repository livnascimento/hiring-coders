import React from 'react';

interface IButtonProps{
  name: string;
}

const Button: React.FC<IButtonProps> = ({name} : IButtonProps) => {
  return (
    <div>
      <button onClick={() => alert(name)}>{name}</button>
    </div>
  );
}

export default Button;