import { ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { storage } from '../firebase';
import { v4 } from 'uuid';

function FileUpload() {
  const [imageUpload, setImageUpload] = useState(null);
  const uploadFile = () => {
      console.log("gggggggggggggg");
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert('ddddddddddd')
      console.log();
      });
    
  };

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}>upload</button>
    </div>
  );
}

export default FileUpload;
