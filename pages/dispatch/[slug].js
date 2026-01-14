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
        <div className="two-cols">
          <div>
            {postData.headline ?
              <h1 dangerouslySetInnerHTML={{ __html: postData.headline }} />
              :
              <h1><em>{postData.title}</em></h1>
            }
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </div>
      </article>
      <a className='button c7-btn' href="https://www.exploretock.com/younginglewood">Book your Visit</a>
      <a className='button c7-btn' href="/collection/all">Shop our wine</a>
      <a className='button c7-btn' href="/dispatch">&larr; Back to Dispatch</a>
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
