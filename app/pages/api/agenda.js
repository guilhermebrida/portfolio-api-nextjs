import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagePath = path.join(process.cwd(), 'assets', 'front-agenda-django.png');
  const imageBase64 = fs.readFileSync(imagePath).toString('base64');

  res.status(200).json({
    image: imageBase64,
    description:
      'Web Agenda developed using Django, created in course "Build a Backend REST API with Python & Django"'
  });
}