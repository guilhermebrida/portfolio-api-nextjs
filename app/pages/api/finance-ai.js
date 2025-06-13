import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagePath = path.join(process.cwd(), 'assets', 'finance-ai.png');
  const imageBase64 = fs.readFileSync(imagePath).toString('base64');

  res.status(200).json({
    image: imageBase64,
    description:
      'SaaS platform in NextJS for financial control, integrated with Stripe, Clerk, ChatGPT, NeonDB'
  });
}