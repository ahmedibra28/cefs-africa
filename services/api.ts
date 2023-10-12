import { Category, Post, PostSlug } from '@/types'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://wordstream.com/wp-json/wp/v2',
})

export const getPosts = async ({
  page,
  limit,
}: {
  page: number
  limit: number
}): Promise<[Post[] | null, Error | null]> => {
  try {
    const response = await api.get(
      `/posts?_embed&page=${page}&per_page=${limit}`
    )
    return [response.data, null]
  } catch (error: any) {
    return [null, new Error(`Error retrieving post: ${error.message}`)]
  }
}

export const getPost = async ({
  id,
}: {
  id: number
}): Promise<[Post | null, Error | null]> => {
  try {
    const response = await api.get(`/posts/${id}?_embed`)
    return [response.data, null]
  } catch (error: any) {
    return [null, new Error(`Error retrieving post: ${error.message}`)]
  }
}

export const getAllPostSlugs = async (): Promise<
  [PostSlug[] | null, Error | null]
> => {
  try {
    const response = await api.get('/posts?_fields=slug')
    return [response.data, null]
  } catch (error: any) {
    return [null, new Error(`Error retrieving post slugs: ${error.message}`)]
  }
}

// export const getAllPostIds = async (): Promise<
//   [PostId[] | null, Error | null]
// > => {
//   try {
//     const response = await api.get('/posts?_fields=id')
//     return [response.data, null]
//   } catch (error: any) {
//     return [null, new Error(`Error retrieving post ids: ${error.message}`)]
//   }
// }

export const getAllCategories = async (): Promise<
  [Category[] | null, Error | null]
> => {
  try {
    const response = await api.get('/categories?_embed')
    return [response.data, null]
  } catch (error: any) {
    return [null, new Error(`Error retrieving categories: ${error.message}`)]
  }
}

export const getPostsByCategory = async ({
  categoryId,
  page,
  limit,
}: {
  categoryId: number
  page: number
  limit: number
}): Promise<[Post[] | null, Error | null]> => {
  try {
    const response = await api.get(
      `/posts?categories=${categoryId}&_embed&page=${page}&per_page=${limit}`
    )

    return [response.data, null]
  } catch (error: any) {
    return [
      null,
      new Error(`Error retrieving posts by category: ${error.message}`),
    ]
  }
}

export const getPostCount = async (): Promise<
  [number | null, Error | null]
> => {
  try {
    const response = await api.get('/posts?_embed')
    return [Number(response.headers['x-wp-total']), null]
  } catch (error: any) {
    return [null, new Error(`Error retrieving post count: ${error.message}`)]
  }
}

export const getPostByCategoryCount = async ({
  categoryId,
  page,
  limit,
}: {
  categoryId: number
  page: number
  limit: number
}): Promise<[number | null, Error | null]> => {
  try {
    const response = await api.get(
      `/posts?categories=${categoryId}&_embed&page=${page}&per_page=${limit}`
    )

    return [Number(response.headers['x-wp-total']), null]
  } catch (error: any) {
    return [null, new Error(`Error retrieving post count: ${error.message}`)]
  }
}

export default api
