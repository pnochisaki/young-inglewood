import Layout from '../../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import { getPostData, getAdjacentPosts } from '../../lib/blog';

export default function Post({ postData, previousPost, nextPost }) {
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
            <div className="post-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <div className="walker-graphic">
              <img src="/images/walker.png" alt="walker graphic" />
            </div>
            <div className="button-bar">
              <a className='button c7-link' href="https://www.exploretock.com/younginglewood">Book your Visit</a>
              <a className='button c7-link' href="/collection/all">Shop our wine</a>
              <a className='button c7-link' href="/dispatch">Back to Dispatch</a>
            </div>
            <nav className="post-pager">
              <Link href={previousPost ? `/dispatch/${previousPost.slug}` : '/dispatch'} className="pager pager-prev">
                <img src="/images/arr-left.png" alt="Previous Post" />Prev
              </Link>
              <Link href={nextPost ? `/dispatch/${nextPost.slug}` : '/dispatch'} className="pager pager-next">
                Next<img src="/images/arr-right.png" alt="Next Post" />
              </Link>
            </nav>
          </div>
        </div>
      </article>
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
  const { previousPost, nextPost } = getAdjacentPosts(params.slug);
  return { props: { postData, previousPost, nextPost } };
}
