import Layout from '../../components/layout';
import { getAllMarkdownIds, getMarkdownData } from '../../lib/markdown'

const mdDir = '_content/work'

export async function getStaticProps({ params }) {
  const markdownData = await getMarkdownData(params.id, mdDir)
  console.log("POST", markdownData);
  return {
    props: {
      markdownData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllMarkdownIds(mdDir)
  return {
    paths,
    fallback: false
  }
}

export default function WorkDetail({ markdownData }) {

  return (
    <Layout>
      <div className="page-margins">
        <div className="col-33-66 work-detail">
          <div>
            <div className="wrapper">
              <div className="thumb" style={{ backgroundImage: `url(${markdownData.thumb})` }}>
              </div>
            </div>
            <div>
              <div className="text">
              <h2>{markdownData.title}</h2>
              <ul className="areas">
                <li>Branding</li>
                <li>Collateral</li>
                <li>Website</li>
              </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper">
              <img src={markdownData.image} alt={markdownData.title} />
            </div>
          </div>
        </div>
      </div>


    </Layout>
  )

}

