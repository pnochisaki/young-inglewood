import Head from 'next/head';
import { getPublishedPostsInDisplayOrder } from '../../lib/blog';
import { getMarkdownData } from '../../lib/markdown'
import Layout from '../../components/layout';
import BlogTeaser from '../../components/blogTeaser';

export default function Dispatch({ allPostsData, markdownData }) {
  return (
    <Layout blog>
      <Head>
        <title>Dispatch</title>
      </Head>
      <h1 dangerouslySetInnerHTML={{ __html: markdownData.headline }} />
      <ul className='blog-listing'>
        {allPostsData.map(({ slug, title, date, excerpt, image }) => (
          <BlogTeaser
            key={slug}
            slug={slug}
            title={title}
            date={date}
            excerpt={excerpt}
            image={image}
          />
        ))}
      </ul>
    </Layout>
  );
}

const mdDir = '_content/pages/'

export async function getStaticProps() {
  const allPostsData = getPublishedPostsInDisplayOrder();
  const markdownData = await getMarkdownData('dispatch', mdDir)
  return { props: { allPostsData, markdownData } };
}
