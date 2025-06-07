import { getSinglePost } from '../../controllers/post.js';
// import { getPostById, updatePost, deletePost } from '../controllers/postController.js';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') return getSinglePost(req, res, id);
//   if (req.method === 'PUT') return updatePost(req, res, id);
//   if (req.method === 'DELETE') return deletePost(req, res, id);

  res.status(405).json({ error: 'Method Not Allowed' });
}
