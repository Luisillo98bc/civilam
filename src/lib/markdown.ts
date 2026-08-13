import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const localBlogImage = (image: unknown) => {
  const value = typeof image === 'string' ? image : '';
  if (value.includes('1600596542815')) return '/viviendas-tramites.jpg';
  if (value.includes('1581094288338')) return '/agua potable.png';
  if (value.includes('1454165804606')) return '/mapas-sig.png';
  return value.startsWith('/') ? value : '/expedientes-tecnicos.png';
};

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date || '2024-01-01',
      excerpt: matterResult.data.excerpt || '',
      image: localBlogImage(matterResult.data.image),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string) {
  if (!/^[a-z0-9-]+$/.test(id)) return null;
  const fullPath = path.join(postsDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title || 'Untitled',
    date: matterResult.data.date || '2024-01-01',
    excerpt: matterResult.data.excerpt || '',
    image: localBlogImage(matterResult.data.image),
  };
}
