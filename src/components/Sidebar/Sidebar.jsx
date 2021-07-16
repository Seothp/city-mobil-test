import React from 'react';
import PropTypes from 'prop-types';

import './Sidebar.css';

function Sidebar({ children }) {
  return (
    <aside className="sidebar">
      {children}
    </aside>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
