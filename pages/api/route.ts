import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try{
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`)
    res.status(200).json(response.data);
  }catch(error) {
    res.status(500).send({error: 'Failed to fetch data'})
  }
}