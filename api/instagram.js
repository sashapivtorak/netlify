import 'dotenv/config';

import axios from 'axios';

export default async function handler(event, context) {
  const endpoint = 'https://api.instagram.com/v1/users/self/media/recent';
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const limit = 5;

  try {
    const response = await axios.get(
      `${endpoint}?access_token=${token}&count=${limit}`
    );
    const posts = response.data.data;

    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(
        posts.map((i) => ({
          id: i.id,
          link: i.link,
          images: i.images,
          videos: i.videos,
          caption: i.caption ? i.caption.text : '',
        }))
      ),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch Instagram data' }),
    };
  }
}
