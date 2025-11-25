import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/blog';
import Layout from '../../components/Layout';

export default function Home({ allPostsData }) {
  return (
    <Layout blog>
      <Head>
        <title>Dispatch</title>
      </Head>
      <h1>Dispatch</h1>
      <ul>
        {allPostsData.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{title}</Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}
