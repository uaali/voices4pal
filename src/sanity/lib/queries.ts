import { client } from './client'

// Query for breaking news in the ticker
export const getBreakingNews = async () => {
  const query = `*[_type == "post" && isBreaking == true && urgency == "high"] | order(publishedAt desc)[0...5] {
    title,
    excerpt,
    location,
    publishedAt
  }`
  
  return await client.fetch(query)
}

// Query for search functionality
export const searchPosts = async (searchTerm: string) => {
  const query = `*[_type == "post" && (
    title match $searchTerm + "*" ||
    excerpt match $searchTerm + "*" ||
    pt::text(body) match $searchTerm + "*"
  )] | order(publishedAt desc)[0...10] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    postType,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    }
  }`
  
  return await client.fetch(query, { searchTerm })
}

// Query for featured posts on homepage
export const getFeaturedPosts = async () => {
  const query = `*[_type == "post" && isFeatured == true] | order(publishedAt desc)[0...6] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    postType,
    location,
    readTime,
    mainImage {
      asset->{
        _id,
        url
      },
      alt,
      caption
    },
    author->{
      name,
      bio
    }
  }`
  
  return await client.fetch(query)
}

// Query for recent posts by type
export const getPostsByType = async (postType: string, limit: number = 10) => {
  const query = `*[_type == "post" && postType == $postType] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    location,
    readTime,
    urgency,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name
    }
  }`
  
  return await client.fetch(query, { postType, limit })
}
