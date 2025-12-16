import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/blog';
import { getMarkdownData } from '../../lib/markdown'
import Layout from '../../components/layout';

export default function Dispatch({ allPostsData, markdownData }) {
  return (
    <Layout blog>
      <Head>
        <title>Dispatch</title>
      </Head>
      <h1 dangerouslySetInnerHTML={{ __html: markdownData.headline }} />
      <ul className='blog-listing'>
        {allPostsData.map(({ slug, title, date, excerpt, featured_image }) => (
          <li
            key={slug}
          >
            <Link href={`/dispatch/${slug}`}>
              {featured_image && (
                <div className='image-container'><img
                  src={featured_image}
                  alt={title}
                /></div>
              )}
              <h3>{title}</h3>
              <div className='excerpt'>{excerpt}</div>
              <button className="c7-btn"><span>Read more</span></button>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

const mdDir = '_content/pages/'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const markdownData = await getMarkdownData('dispatch', mdDir)
  return { props: { allPostsData, markdownData } };
}
