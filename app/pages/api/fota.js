import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagePath = path.join(process.cwd(), 'assets', 'fota-front-page.png');
  const imageBuffer = fs.readFileSync(imagePath);
  const imageBase64 = imageBuffer.toString('base64');

  res.status(200).json({
    image: imageBase64,
    description:
      'Web portal using Node.js and Next.js for managing firmware updates of hardware devices, integrating with Keycloak for secure user authentication.'
  });
}