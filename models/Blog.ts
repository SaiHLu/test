import {model, Schema, models} from 'mongoose'

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
      type: Schema.Types.ObjectId,
      ref: "Category"
  },
  tags: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export default models.Blog || model('Blog', BlogSchema)