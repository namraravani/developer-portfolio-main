// @flow strict
import { personalData } from "@/utils/data/personal-data";

// Function to fetch all slugs
async function fetchAllSlugs() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

  if (!res.ok) {
    throw new Error('Failed to fetch slugs');
  }

  const articles = await res.json();
  return articles.map(article => ({ slug: article.slug }));
}

// Function to fetch blog details by slug
async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
}

// Generate static paths
export async function generateStaticParams() {
  const slugs = await fetchAllSlugs();
  return slugs;
}

// Component to display blog details
async function BlogDetails({ params }) {
  const { slug } = params;
  const blog = await getBlog(slug);

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />
    </div>
  );
}

export default BlogDetails;
