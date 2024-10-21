// src/components/BulkProductUpload.js
import React, { useState } from 'react';
import { bulkUploadProducts } from '../api/api';

const BulkProductUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    await bulkUploadProducts(formData);
  };

  return (
    <div className="bulk-upload">
      <h2>Bulk Upload Products</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default BulkProductUpload;
