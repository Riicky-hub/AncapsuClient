import axios from 'axios';
import { apiUrl } from '../constants/urls';

const categoriesUrl = `${apiUrl}/Categories`;

class Categories {
  static async fetchAll() {
    const response = await axios.get(categoriesUrl);
    return response.data;
  }
}

export default Categories;
