import React from 'react';
//kommenti
const BimViewerPage: React.FC = () => {
  const bimViewerUrl = process.env.REACT_APP_BIM_VIEWER_URL || '';

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        title="BimViewer"
        src={bimViewerUrl}
        style={{ width: '100%', height: '100%', border: '0' }}
      ></iframe>
    </div>
  );
};

export default BimViewerPage;
