import * as React from 'react';

const Blockquote = ({ children }) => {
  return (
    <blockquote className="border-l-4 border-primary rounded-md mb-6 bg-background-dark p-4 md:-mx-4">
      {children}
    </blockquote>
  );
};

export default Blockquote;
