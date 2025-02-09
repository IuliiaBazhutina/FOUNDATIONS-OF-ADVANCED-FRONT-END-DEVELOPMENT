import React from 'react';
import { useState } from 'react';

// HandleFormSubmittion prevents the dafault behaviour and displays input data
function HandleFormSubmittion() {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    // prevent the default behaviour of the form
    event.preventDefault();
    // message with input data
    const msg = `Hello ${event.target[0].value} ${event.target[1].value}!`;
    setMessage(msg);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input style={{ margin: '10px auto', display: 'flex' }} type="text" placeholder="First name"></input>
        <input style={{ margin: '10px auto', display: 'flex' }} type="text" placeholder="Second name"></input>
        <button style={{ height: '30px', width: '80px', margin: '20px auto', backgroundColor: 'bisque' }} type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

// Subscription with conditional rendering displays different buttons depends on the state
function Subscription() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div>
      {isSubscribed ? (
        // renders if "subscribed"
        <div>
          <p style={{ padding: "20px" }}>Thank you for subscription!</p>
          <button style={{ height: '30px', width: '80px', margin: '10px auto', backgroundColor: 'bisque' }} onClick={() => setIsSubscribed(false)}>Unsubscribe</button>
        </div>
      ) : (
        // renders if not "subscribed"
        <div>
          <p style={{ padding: "20px" }}>You aren't subscribed.</p>
          <button style={{ height: '30px', width: '80px', margin: '10px auto', backgroundColor: 'bisque' }} onClick={() => setIsSubscribed(true)}>Subscribe</button>
        </div>
      )}
    </div>
  );
}

export default function Page_2() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>

      <h1>Page 2</h1>

      {/* navigation menu */}
      <nav>
        <ul style={{ padding: "20px", listStyle: "none", color: "blue" }}>
          <li style={{ padding: '10px' }}><a href="/">Home</a></li>
          <li style={{ padding: '10px' }}><a href="/page_1">Page 1</a></li>
        </ul>
      </nav >

      <p style={{ padding: "20px" }}>3. Component HandleFormSubmittion prevents the dafault behaviour and displays input data:</p>
      <HandleFormSubmittion />

      <p style={{ padding: "20px" }}>4. Component Subscription with conditional rendering displays different buttons depends on the state:</p>
      <Subscription />

    </div>
  );
}