import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout';

export default() => {
  return (
    <Layout title="home">
      <h1 className="home-header">Home</h1>
      <div className="red">red</div>
      <div className="orange">orange</div>
      <div className="yellow">yellow</div>
      <div className="green">green</div>
      <div className="blue">blue</div>
      <div className="indigo">indigo</div>
      <div className="violet">violet</div>
    </Layout>
  );
}