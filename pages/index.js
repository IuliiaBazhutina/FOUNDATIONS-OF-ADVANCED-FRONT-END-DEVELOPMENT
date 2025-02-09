import React from 'react';

export default function Home() {

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to my App!</h1>

      {/* navigation menu */}
      <nav>
        <ul style={{ padding: "20px", listStyle: "none", color: "blue" }}>
          <li style={{ padding: '10px' }}><a href="/page_1">Page 1</a></li>
          <li style={{ padding: '10px' }}><a href="/page_2">Page 2</a></li>
        </ul>
      </nav >

      <p style={{ padding: "20px" }}>This is Home page</p>
    </div >
  );
}
