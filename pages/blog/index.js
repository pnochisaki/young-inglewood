import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/blog';
import Layout from '../../components/layout';

export default function Dispatch({ allPostsData }) {
  return (
    <Layout blog>
      <Head>
        <title>Dispatch</title>
      </Head>
      <h1><em>dispatch</em></h1>
      <ul className='blog-listing'>
        {allPostsData.map(({ slug, title, date, featured_image }) => (
          <li
            key={slug}
          >
            <Link href={`/blog/${slug}`}>
              {featured_image && (
                <div className='image-container'><img
                  src={featured_image}
                  alt={title}
                /></div>
              )}
              <h3>{title}</h3>
              </Link>
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
