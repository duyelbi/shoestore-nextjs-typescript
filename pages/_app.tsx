import React from 'react'
import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';

import '../styles/globals.scss';

/* The following line can be included in your src/index.js or App.js file */
import '../styles/App.scss';


// export default class CustomApp extends React.Component<AppProps> {
//   render() {
//     return (
//       <div className="root-app">
//         <Head>
//           <title>Shoe store nextjs typescript scss</title>
//           <link rel="icon" href="/favicon.ico" />
//           <link rel="icon" href="../styles/globals.scss" />
//         </Head>
//         <this.props.Component {...this.props.pageProps} />
//       </div>
//     )
//   }
// }

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="root-app">
      <Head>
        <title>Shoe store nextjs typescript scss</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="../styles/globals.scss" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default CustomApp;

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return(
//     <div className="root-app">
//       <Head>
//         <title>Shoe store nextjs typescript scss</title>
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="icon" href="../styles/globals.scss" />
//       </Head>
//       <Component {...pageProps} />
//     </div>
//   )
// }

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }
