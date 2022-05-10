import { getSortedMarkdownData } from '../../lib/markdown'
import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/layout'

const mdDir = '_content/work'

export async function getStaticProps() {
  const allWorkData = getSortedMarkdownData(mdDir)
  return {
    props: {
      allWorkData
    }
  }
}

export default function Work({ allWorkData }) {

  useEffect(() => {
    // do stuff
  }, [])

  return (
    <Layout>
      <div className="page-margins">
        <div className="col-3 work-grid">
          {allWorkData.map(({ layout, title, slug, image, thumb }) => (
            <div className={slug} key={slug}>
              <div className="wrapper">
                <div className="thumb" style={{ backgroundImage: `url(${thumb})` }}>
                  <Link href={'/work/' + slug}>
                    <h3>{title}</h3>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </Layout>
  )
}
