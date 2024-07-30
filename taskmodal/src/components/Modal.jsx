/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import '../modal.css';

function Modal({ closeModal }) {
  const modalRef = useRef(null);

  const colors = [
    { name: 'Font Color', hex: '#444444' },
    { name: 'Background Color', hex: '#FFFFFF' },
    { name: 'Button Color', hex: '#2072EF' },
    { name: 'Button Border Color', hex: '#2072EF' },
    { name: 'Buttons Mouseover Color', hex: '#0053D1' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className='modalBackground'>
      <div className='modalContainer' ref={modalRef}>
  
        <div className='header'>
          <h2>Theme Color</h2>
          <button className='changeThemeButton'>Change Theme</button>
        </div>
        <div className='colorList'>
          {colors.map((color, index) => (
            <div key={index} className='colorItem'>
              <span className='colorName'>{color.name}</span>
              <span className='colorHex'>{color.hex}</span>
              <div className='colorDisplay' style={{ backgroundColor: color.hex }}></div>
            </div>
          ))}
        </div>
        <div className='footer'>
          <button className='cancelButton' onClick={() => closeModal(false)}>Cancel</button>
          <button className='saveButton'>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
