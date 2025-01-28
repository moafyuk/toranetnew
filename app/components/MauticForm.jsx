"use client"

import { useEffect, useRef, useState } from 'react';

const MauticForm = ({formID}) => {
  const formContainerRef = useRef(null);
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !formLoaded) {
      // Load Mautic script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.id = 'mautic-form-script';
      script.src = `https://connect.toranet.co.uk/form/generate.js?id=${formID}`;
      script.async = true;
      
      script.onload = () => {
        setFormLoaded(true);
    };
      
      // Append the script to the form container
      if (formContainerRef.current) {
        // Clear the form container
        formContainerRef.current.innerHTML = '';
        formContainerRef.current.appendChild(script);
      }
    }
  }, [formID, formLoaded]);

  if (!formID) {
    console.error('MauticForm component requires a form ID prop');
    return (
      <div>
        <p>Error: MauticForm component requires a form ID prop</p>
      </div>
    )
  }

  return (
    <div>
      <div ref={formContainerRef} id="mautic-form-container">
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default MauticForm;
