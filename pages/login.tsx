import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import React, { useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';

import "../styles/globals.css";
import "../styles/main.module.css"

const Login = () => {
  const { data: session } = useSession();
  useEffect(() => {
    signIn()
    session ? document.location.replace("/") : console.log(session)
  },[])

  return (
    <div className="login">
      <Head>
        <title>
          GMRseat Login
        </title>
        <meta name="description" content="user login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {!session ? (
        <div className="login">
          <div className="">
            <p>Not signed in</p>
            <br />
            <FontAwesomeIcon icon={faUser}/>
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        </div>
      ) : (
      <>
        <p>Already signed in return <Link href="/">Here</Link></p> 
      </>
      )} */}
    </div>
  )
}

export default Login