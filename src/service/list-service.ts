import axios from 'axios';
export default class ListService {
  static async getList() {
    const response = await axios.get(
      'https://api.voxqube.com:7000/api/v2/voices/list'
    );

    return response.data;
  }
}
