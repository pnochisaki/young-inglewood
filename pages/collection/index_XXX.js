import Layout from '../../components/layout';

const userPass = Buffer.from(process.env.C7_USER + ":" + process.env.C7_PASS).toString('base64');

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://api.commerce7.com/v1/collection', {
    method: 'get',
    headers: new Headers({
      'Authorization': 'Basic ' + userPass,
      'Content-Type': 'application/json',
      'tenant': 'young-inglewood-vineyards'
    })
  });
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}



export default function CollectionIndex({ data }) {
  return (
    <Layout purchase>
      <div className="page-margins">
        <div className="collections-nav">
        {data.collections
        .filter(collection => collection.metaData['store-menu'])
        .map((collection, index) => {
            return <a className="c7-btn" key={index} href={'/collection/' + collection.slug}><span>{collection.title}</span></a>
          }
        )}
        </div>
        <div id="c7-content"></div>
      </div>
    </Layout>
  )

}

