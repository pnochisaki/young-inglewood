// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const userPass = Buffer.from(process.env.C7_USER + ":" + process.env.C7_PASS).toString('base64');

export default async function fetchCollections(req, res) {
  
  const collections = await fetch('https://api.commerce7.com/v1/collection', {
    method: 'get',
    headers: new Headers({
      'Authorization': 'Basic ' + userPass,
      'Content-Type': 'application/json',
      'tenant': 'young-inglewood-vineyards'
    })
  });

  const collectionsResponse = await collections.json()
  res.status(200).json(collectionsResponse)
}

