import React from 'react';

interface TypographyIF {
  name: string;
}
const MuiTypography = ({ name }: TypographyIF) => {
  return <div>{name}</div>;
};

export default MuiTypography;
