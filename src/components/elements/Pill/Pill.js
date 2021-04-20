import { cleanStyles } from '@lib/utils/utils';
import { Link as NavLink } from 'gatsby';
import * as React from 'react';

const baseStyle = 'text-xs font-medium rounded-full px-3';

const Pill = ({ children, to, className }) => {
  const basePill = (
    <p className={cleanStyles(`${baseStyle} ${className ? className : ''}`)}>
      {children}
    </p>
  );

  if (to) {
    return <NavLink to={to}>{basePill}</NavLink>;
  }

  return basePill;
};

export default Pill;
