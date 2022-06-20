import Blog from 'models/Blog'
import {
  getBlogType,
  updateBlogType,
  deleteBlogType,
  createBlogType,
} from 'validations/blogValidations'

export async function getAllBlogs(page: number) {
  page = page || 1
  const perPage = 6
  try {
    return await Blog.find({})
      .populate('category')
      .sort({ createdAt: 'desc' })
      .limit(perPage)
      .skip((page - 1) * perPage)
      .exec()
  } catch (error) {
    throw error
  }
}

export async function getBlog({ id }: getBlogType) {
  try {
    return await Blog.findById(id).populate('category').exec()
  } catch (error) {
    throw error
  }
}

export async function createBlog(data: createBlogType) {
  try {
    return await Blog.create(data)
  } catch (error) {
    throw error
  }
}

export async function updateBlog(id: string, data: updateBlogType) {
  try {
    return await Blog.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true },
    )
  } catch (error) {
    throw error
  }
}

export async function deleteBlog({ id }: deleteBlogType) {
  try {
    return await Blog.findByIdAndDelete(id, { new: true }).exec()
  } catch (error) {
    throw error
  }
}
