import React from 'React';
import Link from 'next/link'
import Head from 'next/head'
import stylesheet from './stylesheets/global.scss';

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/logo'><a>Logo</a></Link> |
        <Link href='/users'><a>Users</a></Link>
      </nav>
    </header>

    { children }

    <footer>
      I am a footer. I am here to stay.
    </footer>
  </div>
)