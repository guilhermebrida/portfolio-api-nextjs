import fs from 'fs';
import path from 'path';
import { getCorsHeaders, handleOptions } from '@/lib/cors';

export async function OPTIONS() {
  return handleOptions();
}

export async function GET() {
  const imagePath = path.join(process.cwd(), 'app', 'assets', 'front-agenda-django.png');
  const imageBase64 = fs.readFileSync(imagePath).toString('base64');

  return new Response(
    JSON.stringify({
      image: imageBase64,
      description:
        'Web Agenda developed using Django, created in course "Build a Backend REST API with Python & Django"',
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
