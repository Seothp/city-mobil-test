import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

function Footer({ children }) {
  return (
    <footer className="footer">
      {children}
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
