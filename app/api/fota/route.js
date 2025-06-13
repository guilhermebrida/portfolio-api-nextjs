import fs from 'fs';
import path from 'path';
import { getCorsHeaders, handleOptions } from '@/lib/cors';

export async function OPTIONS() {
  return handleOptions();
}

export async function GET() {
  const imagePath = path.join(process.cwd(), 'app', 'assets', 'fota-front-page.png');
  const imageBuffer = fs.readFileSync(imagePath);
  const imageBase64 = imageBuffer.toString('base64');

  return new Response(
    JSON.stringify({
      image: imageBase64,
      description:
        'Web portal using Node.js and Next.js for managing firmware updates of hardware devices, integrating with Keycloak for secure user authentication.'
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...getCorsHeaders(),
      },
    }
  );
}
