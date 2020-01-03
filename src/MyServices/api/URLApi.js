import axios from 'axios';
import axiosRetry from 'axios-retry';
import cookie from 'react-cookies'

const urlBackend = 'http://www.mocky.io/'

const ROOT_API = axios.create({
   baseURL: urlBackend,
   headers: {
      'Authorization': `Bearer ${cookie.load('JWT')}`,
      'Content-Type': 'application/json',

   }
})

export const client = async (endPoint, { method, params = "", body = "" }) => {
   axiosRetry(ROOT_API, { retries: 3 });

   try {
      let getData
      switch (method) {
         case 'GET':
            getData = await ROOT_API.get(endPoint, params)
            break;
         case 'POST':
            getData = await ROOT_API.post(endPoint, body)
            break;
         case 'DELETE':
            getData = await ROOT_API.delete(endPoint)
            break;
         case 'PATCH':
            getData = await ROOT_API.patch(endPoint, body)
            break;
         default:
            break;
      }

      if (getData.status === 200) return getData.data
   } catch (e) {
      alert(e.message)
   }
}
