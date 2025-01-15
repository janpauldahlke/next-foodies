'use client'
import { useRef } from 'react';
import styles from './image-picker.module.css'

const MealsImagePicker = ({ label, name }) => {

  const inputRef = useRef();
  //forwards button action to hidden input to gain more control on styling
  const handleImagePickerEvent = () => { 
    inputRef.current.click();
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={ name }>{label}</label>
      <div className={ styles.controls}>
        <input className={styles.input} id={name} type="file" accept="image/png, image/jpeg" name={name} ref={ inputRef} />
        <button className={ styles.button } type="button" onClick={handleImagePickerEvent}>Choose an image</button>
      </div>
    </div>
  )
}

export default MealsImagePicker;