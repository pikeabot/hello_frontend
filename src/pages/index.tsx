import React, { useState, useEffect } from 'react';

export default function App() {
  const [message, setMessage] = useState<string>('');
  const [displayError, setDisplayError] = useState<string>('');

  useEffect(() => {
    let promise = new Promise(function (resolve, reject) {
      fetch('http://127.0.0.1:8000/hello/hello')
        .then(response => response.text())
        .then(data => setMessage(data))
        .catch(error => {
          let errorStr: string = 'There was a problem with the Fetch operation: ' + error;
          setDisplayError(errorStr);
          console.error(errorStr);
        });

      console.log('Message:' + {message});
    })
      .catch(error => {
        let errorStr: string = 'ERROR: ' + error;
        setDisplayError(errorStr);
        console.error(errorStr);
      });

  }, []);

  return (
    <div>
      <div className='error'>
        {displayError}
      </div>

      <h1>The message: {message}</h1>
    </div>

  )
}
