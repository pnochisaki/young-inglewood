// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const userPass = Buffer.from(process.env.C7_USER + ":" + process.env.C7_PASS).toString('base64');

export default async function fetchMemberships(req, res) {

  const memberships = await fetch('https://api.commerce7.com/v1/club', {
    method: 'get',
    headers: new Headers({
      'Authorization': 'Basic ' + userPass,
      'Content-Type': 'application/json',
      'tenant': 'young-inglewood-vineyards'
    })
  });

  const membershipsResponse = await memberships.json()
  res.status(200).json(membershipsResponse)
}

