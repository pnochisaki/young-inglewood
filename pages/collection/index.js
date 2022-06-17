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


export default function CollectionIndex( {data} ) {
  return (
    <Layout purchase>
      <div className="page-margins">
        {data.collections.map((collection, index) => {
          return <div key={index}><a href={'/collection/' + collection.slug}>{collection.title}</a></div>
        })}
        <div id="c7-content"></div>
      </div>
    </Layout>
  )

}

