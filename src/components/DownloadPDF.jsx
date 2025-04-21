import React from 'react';

const DownloadPDF = () => {
  const download = () => {
    window.open('/api/download', '_blank');
  };

  return (
    <button
      onClick={download}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"
    >
      Download PDF
    </button>
  );
};

export default DownloadPDF;
