import axios from 'axios';
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
   console.log("TCL: client -> endPoint", endPoint)
   console.log("TCL: client -> methode", method)
   try {
      let getData
      switch (method) {
         case 'GET':
            getData = await ROOT_API.get(endPoint, params)
            console.log("TCL: ROOT_API", getData)
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

      return getData.data
   } catch (e) {
      alert(e.message)
   }
}
