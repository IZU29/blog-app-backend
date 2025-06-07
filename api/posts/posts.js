import { createPost, getAllPost } from '../../controllers/post';

export default async function handler(req, res) {
  if (req.method === 'GET') return getAllPost(req, res);
  if (req.method === 'POST') return createPost(req, res);
  
  res.status(405).json({ error: 'Method Not Allowed' });
}
