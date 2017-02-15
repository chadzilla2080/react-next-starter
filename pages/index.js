import Link from 'next/link';
import React from 'react';

export default class Home extends React.Component {
  render () {
    return (<div>Hello World. <Link href='/users'><a>Users</a></Link></div>);
  }
}