import Head from 'next/head';
import Layout, { siteTitle } from '../src/layouts/main/main';
import utilStyles from '../styles/modules/utils.module.scss';

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Software Developer, based in Luzern, Switzerland.</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
  );
}