import type { NextApiResponse, NextApiRequest } from 'next';


// Handles your exit so to properly manage your form. 
export default function preview(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData({});
  res.writeHead(307, {Location: "/"});
  res.end();
};