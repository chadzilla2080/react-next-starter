import React from 'react'
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    return { users }
  }

  render () {
    const { users } = this.props;
    return <div>
      { renderUsers(users) }
    </div>
  }
}

function renderUsers(users) {
  return users.map(u => (<div>{ u.name }</div>))
}