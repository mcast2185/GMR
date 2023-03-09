import type { NextApiResponse, NextApiRequest } from 'next';

// Handles preview requests, setting the response and redirect to home. 
export default function preview(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  res.writeHead(307, {Location: "/"});
  res.end();
};