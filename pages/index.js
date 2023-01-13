import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>フロントエンドエンジニア兼ドローン操縦士</p>
        <p>
          (これはNext.jsのチュートリアルを参考にしたWebサイトです
          <a href="http://nextjs.org/learn">our Next.js tutorial</a>)
        </p>
      </section>
    </Layout>
  );
}