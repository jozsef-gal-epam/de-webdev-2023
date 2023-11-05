// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Movie } from '@/models/movie';
import { readFileSync } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'

const MovieDB: Movie[] = JSON.parse(readFileSync('public/movies.json', 'utf-8'));

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie[]>
) {
  res.status(200).json(MovieDB);
}
