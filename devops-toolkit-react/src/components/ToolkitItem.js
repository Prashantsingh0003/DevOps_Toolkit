import React from 'react';

function ToolkitItem({ title, tools }) {
  return (
    <div className="toolkit-item">
      <h3>{title}</h3>
      <p>{tools.join(', ')}</p>
    </div>
  );
}

export default ToolkitItem;