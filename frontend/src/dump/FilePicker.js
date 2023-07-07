import React, { useState } from 'react';
import './FilePicker.css'; // import the CSS file

function FilePicker({ allowedExtensions, onChange, onSubmit, placeholderText, logoImage, submitButtonText }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  function handleFileChange(event) {
    const files = event.target.files;
    const selected = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const extension = file.name.split('.').pop();
      if (allowedExtensions.includes(extension)) {
        selected.push(file);
      }
    }
    setSelectedFiles(selected);
    if (onChange) {
      onChange(selected);
    }
  }

  function handleDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const selected = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const extension = file.name.split('.').pop();
      if (allowedExtensions.includes(extension)) {
        selected.push(file);
      }
    }
    setSelectedFiles(selected);
    if (onChange) {
      onChange(selected);
    }
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleUpload() {
    // do something with the selected files
    if (onSubmit) {
      onSubmit(selectedFiles);
    }
  }

  return (
    <div className="file-picker" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="file-picker__header">
        <img className="file-picker__logo" src={logoImage} alt="File Icon" />
        <div className="file-picker__text">{placeholderText}</div>
      </div>
      <div className="file-picker__body">
        {selectedFiles.length > 0 && (
          <ul>
            {selectedFiles.map(file => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
      <button className="file-picker__button" onClick={handleUpload}>{submitButtonText}</button>
      <input
        type="file"
        id="filePicker"
        multiple
        accept={allowedExtensions.map(ext => `.${ext}`).join(',')}
        onChange={handleFileChange}
      />
    </div>
  );
}

FilePicker.defaultProps = {
  allowedExtensions: ['jpg', 'jpeg', 'png', 'gif'],
  placeholderText: 'Drop files here or click to select',
  submitButtonText: 'Submit'
};

export default FilePicker;