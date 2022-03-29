import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { FileUploader } from "react-drag-drop-files";
import { connect } from 'react-redux';

import styles from '../styles/uploadForm.module.css'

function UploadFormComponent(props) {

  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  // const [fileObject, setFileObject] = useState({});
  const [fileData, setFileData] = useState({});
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  function handleNameChange(e){
    e.preventDefault() 
    setName(e.target.value);
  }

  function handleTextChange(e){
    e.preventDefault() 
    setDescription(e.target.value)
  }

const handleFile = (file) => {
  var r = new FileReader();
  //If file type is not an image, continue
  if (!file.type.match('image.*')) {
    return;
  }

  try {
    console.log('its an image')
    r.onloadend = async function (e) {
      if (!e || !e.target || typeof r.result !== 'string'){
        return;
      }
      setFileData({
        [file.name]: {
          id: name,
          desc: description,
          name: file.name,
          mimeType: file.type,
          data: r.result.split(',')[1]
        }
      })
    }
  } catch (e) {
    console.error('error:', e);
  }
  r.readAsDataURL(file);
}

  const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];

  useEffect(() => {
      if(images.length < 1) return;
      const newImageUrls = [];
      images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
      setImageURLs(newImageUrls);
      // console.log('url...',newImageUrls);

  }, [images]);

  const handleChange = (e) => {
    setImages([...e]);
    
    handleFile(e[0]);
  };

  function handleSubmit(e){
    e.preventDefault() 

    console.log(description, fileData);

      props.upload(
        {
          id: name,
          user: 'test',
          registryUri: 't3t3yg8aw6gj4h46bf97cjegwrfps1m3gq7ogp4dtjrr9aryg6h514',
          privateKey: 'db6bf41db59265f09862784875d6fa9a4d9d6b4529d6bfbe176e85e226fb1588',
          file: fileData,
          contractId: 'test'
        }
      );
  }


  return (
    <div className={`container ${styles.formContainer}`}>
      <h2>Upload File to the Blockchain</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor=""><b>Name</b></label>
            <input type="text" className="form-control" id="name" aria-describedby="" placeholder="Enter name" value={name} onChange={handleNameChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="">Brief description</label>
            <textarea className="form-control" id="" rows="3" placeholder="give a very brief description of your file" value={description} onChange={handleTextChange}></textarea>
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

const UploadForm = connect(
  (state) => {
    return {
      state: state
    }
  },
  (dispatch) => {
    return {
      upload: (props) => {
        dispatch({
          type: 'UPLOAD',
          payload: {
            id: props.id,
            user: props.user,
            registryUri: props.registryUri, 
            privateKey: props.privateKey,
            file: props.file,
            contractId: props.contractId
          }
        })

      }
    }
  }
)(UploadFormComponent)

export default UploadForm;