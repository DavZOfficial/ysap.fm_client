import React from 'react';
import {useDropzone} from 'react-dropzone';

function Drop(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes <br></br>
      {file.name} {file.type}
    </li>
  ));

  

  return (
    <section className="drop-container">
      <div class="drop-container expanded" {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p id="submit-field" class=".drop-container">Drag 'n' drop or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default Drop;