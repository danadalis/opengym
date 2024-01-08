import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <RootLayout>
    <>
      <Head>
        <title>OpenGym</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <h1>OpenGym</h1>
      </div>
      <style jsx global>{`
        html,
        body {
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: black;
          color: white;
          font-family: 'GeistSans', monospace; /* Assuming GeistSans is correctly applied from your layout */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h1 {
          text-align: center;
          font-size: clamp(2em, 8vw, 12em);
        }
      `}</style>
    </>
    </RootLayout>
  );
};

export default Home;
