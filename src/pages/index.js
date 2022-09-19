import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// import CMS from 'netlify-cms-app'
// // Initialize the CMS object
// CMS.init()
// // Now the registry is available via the CMS object.
// CMS.registerPreviewTemplate('my-template', MyTemplate)

// useEffect(()=>{
//   let script2 = document.createElement('script');
//   script2.type = 'text/javascript';
//   script2.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
//   document.getElementById('root').appendChild(script2);
//   },[]
// );
// componentDidMount(()=> {
//   let script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
//   document.getElementById('append').appendChild(script);
// });

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // Add Netlify Identity script
  if (typeof window !== "undefined") {
    // browser code
    const document = window.document;
    let script = document.createElement("script");
    script.innerHTML = `
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  `;
    document.head.appendChild(script);
  }

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
