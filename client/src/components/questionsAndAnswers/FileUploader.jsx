import React from 'react';
import './FileUploader.scss';

const FileUploader = ({ currentId, onChange }) => {

  return (
    <div className='uploader'>
      <label className='file'>
        <input
          className='custom-file-input'
          type='file'
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default FileUploader;