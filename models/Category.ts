import {model, Schema, models} from 'mongoose'

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  blogs: [{type: Schema.Types.ObjectId, ref: "Blog"}]
}, {
  timestamps: true
})

export default models.Category || model('Category', CategorySchema)