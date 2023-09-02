import axios from 'axios';
import { urlCategories } from '../constants/urls';

class Categories {
  static async fetchAll() {
    const response = await axios.get(urlCategories);
    return response.data;
  }
}

export default Categories;
