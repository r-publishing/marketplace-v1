import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { FileUploader } from "react-drag-drop-files";

import styles from '../styles/uploadForm.module.css'

export default function UploadForm() {

  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];

  useEffect(() => {
      if(images.length < 1) return;
      const newImageUrls = [];
      images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
      setImageURLs(newImageUrls);
      console.log('url...',newImageUrls);
  }, [images]);

  const handleChange = (e) => {
    setImages([...e]);
  };

  return (
    <div className={`container ${styles.formContainer}`}>
      <h2>Upload File to the Blockchain</h2>
      <form className={styles.form}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1"><b>Name</b></label>
            <input type="text" className="form-control" id="name" aria-describedby="" placeholder="Enter name" />
        </div>
        <div className={styles.fileupload}>
            <FileUploader handleChange={handleChange} multiple name="file" types={fileTypes} className={styles.red}/>
            { imageURLs.map(imageSrc => <Image src={imageSrc} key={imageSrc.id} alt="NFT" width="250%" height="200%"/>)}
        </div>
        <div className={`form-group`}>
            <button type="submit" className={`btn btn-outline-danger ${styles.button}`}>Upload</button>
        </div>
      </form>
    </div>
  )
}
