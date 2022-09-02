// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const userPass = Buffer.from(process.env.C7_USER + ":" + process.env.C7_PASS).toString('base64');

export default async function fetchTags(req, res) {

  const tags = await fetch('https://api.commerce7.com/v1/customer/db939f6f-2108-4c1d-82e2-f524d5993ad0/allocation/for-web', {
    method: 'get',
    headers: new Headers({
      'Authorization': 'Basic ' + userPass,
      'Content-Type': 'application/json',
      'tenant': 'young-inglewood-vineyards'
    })
  });

  const tagsResponse = await tags.json()
  res.status(200).json(tagsResponse)
}

