import Layout from '../../components/layout';
import Head from 'next/head';
import { getPostData } from '../../lib/blog';

export default function Post({ postData }) {
  return (
    <Layout blog_post>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        {postData.headline ?
          <h1 dangerouslySetInnerHTML={{ __html: postData.headline }} />
          :
          <h1>{postData.title}</h1>
        }
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      <a className='button' href="/dispatch">&larr; Back to Dispatch</a>
    </Layout>
  );
}

export async function getStaticPaths() {
  const fs = await import('fs');
  const path = await import('path');
  const postsDir = path.join(process.cwd(), './_content/blog');
  const fileNames = fs.readdirSync(postsDir);
  const paths = fileNames.map(fn => ({ params: { slug: fn.replace(/\.md$/, '') } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return { props: { postData } };
}
