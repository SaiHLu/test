import Category from "models/Category"
import { getCategoryType, updateCategoryType, deleteCategoryType, createCategoryType } from "validations/categoryValidations";

export async function allCategories() {
  try {
    return await Category.find({})
      .exec();
  } catch (error) {
    throw error
  }
}

export async function getAllCategories(page: number) {
  page = page || 1;
  const perPage = 6;
  try {
    return await Category.find({})
      .limit(perPage)
      .skip((page - 1) * perPage)
      .exec();
  } catch (error) {
    throw error
  }
}

export async function getCategory({id}: getCategoryType) {
  try {
    return await Category.findById(id).exec();
  } catch (error) {
    throw error
  }
}

export async function createCategory(data: createCategoryType) {
  try {
    return await Category.create(data);
  } catch (error) {
    throw error
  }
}

export async function updateCategory(id: string, data: updateCategoryType) {
  try {
    return await Category.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
      );
  } catch (error) {
    throw error
  }
}

export async function deleteCategory({id}:deleteCategoryType) {
  try {
    return await Category.findByIdAndDelete(id, {new: true}).exec();
  } catch (error) {
    throw error
  }
}