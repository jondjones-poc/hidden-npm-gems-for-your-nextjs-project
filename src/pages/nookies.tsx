import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import nookies, { parseCookies, setCookie } from 'nookies';

export default function NookieEample(props: any) {

  const [clientCookie, setClientCookie] = useState('');

  useEffect(() => {
    const cookies = parseCookies();
    setClientCookie(cookies['client-cookie'])
  }, []);

  function setTimeCookies() {

    const d = new Date();
    const time = d.getTime().toString();
    console.log(time);

    nookies.set(null, 'server-cookie', time)

    setCookie(
      null,
      'client-cookie',
      time.toString(), {
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    });
}


  return (
    <>
      <h1>List</h1>

      <div>
        <>Server cookie: {props.serverCookie}</>
        <>Client cookie: {clientCookie}</>
        <button onClick={ () => setTimeCookies() }>Click</button>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  const serverCookie = cookies['server-cookie'];

  console.log(serverCookie)

  return {
    props: {
      server: true,
      serverCookie: serverCookie || ''
    },
  }
}