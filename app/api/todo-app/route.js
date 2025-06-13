import fs from 'fs';
import path from 'path';
import { getCorsHeaders, handleOptions } from '@/app/lib/cors';

export async function OPTIONS() {
  return handleOptions();
}

export async function GET() {
  const imagePath = path.join(process.cwd(), 'app', 'assets', 'todo-app.png');
  const imageBase64 = fs.readFileSync(imagePath).toString('base64');

  return new Response(
    JSON.stringify({
      image: imageBase64,
      description: 'Todo App Developed using React',
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
