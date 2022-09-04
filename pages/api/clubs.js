// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const userPass = Buffer.from(process.env.C7_USER + ":" + process.env.C7_PASS).toString('base64');

export default async function fetchClubs(req, res) {

  const clubs = await fetch('https://api.commerce7.com/v1/club', {
    method: 'get',
    headers: new Headers({
      'Authorization': 'Basic ' + userPass,
      'Content-Type': 'application/json',
      'tenant': 'young-inglewood-vineyards'
    })
  });

  const clubsResponse = await clubs.json()
  res.status(200).json(clubsResponse)
}

