'use client'
import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './image-picker.module.css'

const MealsImagePicker = ({ label, name }) => {

  const [pickedImage, setPickedImage] = useState();
  const inputRef = useRef();

  //forwards button action to hidden input to gain more control on styling
  const handleImagePickerEvent = () => { 
    inputRef.current.click();
  }

  const handleImageChange = (event) => { 
    const imageFile = event.target.files[0];
    if (!imageFile) { 
      setPickedImage(null)
      return;
    }
    
    const fileReader = new FileReader();
    fileReader.onload = () => { 
      setPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(imageFile)
  }

  const removeImageHandler = () => {
    setPickedImage(null) // reset preview
    if (inputRef.current) {
      inputRef.current.value = null; // resetr input
    }
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={ name }>{label}</label>
      <div className={styles.controls}>
        
        <div className={styles.preview}>
          {!pickedImage && <p>no imagen choosen yet</p>}
          {pickedImage && (
            <div className={ styles.previewContainer}>
              <Image src={pickedImage} alt="image preview" fill />
              <button
                className={styles.removeButton}
                type="button"
                onClick={removeImageHandler}
                aria-label="Remove image"
              >
                ×
              </button>
            </div>
          )}
        </div>
        <input
          className={styles.input}
          id={name} type="file"
          accept="image/png, image/jpeg"
          name={name}
          ref={inputRef}
          onChange={handleImageChange}
          multiple={false}
          required
        />
        <button className={ styles.button } type="button" onClick={handleImagePickerEvent}>Choose an image</button>
      </div>
    </div>
  )
}

export default MealsImagePicker;