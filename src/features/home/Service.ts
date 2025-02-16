import { AxiosResponse } from 'axios';

import { api } from '@config/Axios';
import { Home } from './Types';

export class HomeService {
  static async all(): Promise<Home | null> {
    try {
      const response: AxiosResponse = await api.get<Home | null>(
        'https://www.mdsystemweb.com.br/projects/api/v1/test/layout.php'
      );

      return response.data; // Retorna todos os dados da API
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      return null;
    }
  }
}
