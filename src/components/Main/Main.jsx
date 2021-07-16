import React from 'react';
import PropTypes from 'prop-types';

import './Main.css';

function Main({ children }) {
  return (
    <main className="main">
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
