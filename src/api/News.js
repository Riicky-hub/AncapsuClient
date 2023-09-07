import axios from 'axios';
import { apiUrl } from '../constants/urls';

const newsUrl = `${apiUrl}/news`;

class News {
  static async fetchAll() {
    const response = await axios.get(newsUrl);
    return response.data;
  }
  static async createNews(obj) {
    try {
      const response = await axios.post(newsUrl, obj);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
}

export default News;
