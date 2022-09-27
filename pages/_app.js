import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer> © 2022 LUCHIO </footer>
    </>
  );
}

export default MyApp;
