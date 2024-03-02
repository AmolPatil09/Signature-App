import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

const ImageCompressor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      const img = document.getElementById('preview');
      img.src = result;
    };
    reader.readAsDataURL(file);
  };

  const compressImage = async () => {
    if (!selectedImage) {
      alert('Please select an image');
      return;
    }

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(selectedImage, options);
      setCompressedImage(compressedFile);
    } catch (error) {
      console.error('Image compression error:', error);
      alert('Failed to compress image');
    }
  };

  const downloadImage = () => {
    if (compressedImage) {
      const url = URL.createObjectURL(compressedImage);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'compressed_image.jpg');
      document.body.appendChild(link);
      link.click();
    }
  };

  return (
    <div>
        <div style={{ width: '315px', height: '300px', border:'2px solid black',display:'flex',alignItems:'center',justifyContent:'center' }}>
        {selectedImage?<img id="preview" alt="Selected Image" style={{ width: '300px',height: '300px' }} />: (
        <p className='text-black'>No image selected</p>
      )}
        </div>
      <input type="file" accept="image/*" onChange={handleImageChange} className='form-control my-2'/>
      
      
      
      <button onClick={compressImage} className='btn btn-primary mb-2'>Compress Image</button>
      <br />
      <button onClick={downloadImage} disabled={!compressedImage} className='btn btn-primary'>
        Download Compressed Image
      </button>
    </div>
  );
};

export default ImageCompressor;
