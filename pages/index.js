import Link from 'next/link';
import React from 'react';

export default() => {
    return (
      <div className="hello">Hello World. 
        <Link href='/users'><a>Users</a></Link>
        <style jsx>{`
          .hello {
            font: 15px Helvetica, Arial, sans-serif;
            background: #eee;
            padding: 100px;
            text-align: center;
            transition: 100ms ease-in background;
          }
          .hello:hover {
            background: #ccc;
          }
        `}</style>
      </div>
      );
  }