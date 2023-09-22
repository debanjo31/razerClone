import { useRef, useEffect } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

const AutoComplete = () => {
  const autoCompleteRef = useRef<HTMLInputElement>(null);
  const options = {
    types: ['address'],
    componentRestrictions: { country: 'us' },
  };

  useEffect(() => {
    if (!autoCompleteRef.current || !window.google) return;

    const autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      options
    );

    autoComplete.addListener('place_changed', async function () {
      const place = await autoComplete.getPlace();
      console.log({ place });
    });
  }, []);

  return (
    <div>
      <label htmlFor='address-input'>Enter address:</label>
      <input
        id='address-input'
        ref={autoCompleteRef}
        type='text'
      />
    </div>
  );
};

export default AutoComplete;
