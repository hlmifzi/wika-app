import axios from 'axios';
// import axiosRetry from 'axios-retry';
import NotifSwal from '../../MyComponent/notification/Swal'

export const urlBackend = 'http://api.dedekrnwan.site/'

const ROOT_API = axios.create({
   baseURL: urlBackend,
   headers: {
      'Authorization': `Bearer ${localStorage.getItem('JWT')}`,
      'Content-Type': 'application/json',

   }
})

export const clientGet = async (endPoint, { params = "" }) => {
   // axiosRetry(ROOT_API, { retries: 3 });

   try {
      let getData = await ROOT_API.get(endPoint, params)
      if (getData.status === 200) return getData.data
   } catch (e) {
      return NotifSwal.failed(e.message)
   }
}

export const clientPost = async (endPoint, body) => {
   // axiosRetry(ROOT_API, { retries: 3 });

   try {
      let getData = await ROOT_API.post(endPoint, body)
      if (getData.status === 200) return getData.data
   } catch (e) {
      return NotifSwal.failed(e.message || e.error.message)
   }
}


export const clientDelete = async (endPoint, { params = "" }) => {
   // axiosRetry(ROOT_API, { retries: 3 });

   try {
      let getData = await ROOT_API.delete(endPoint, params)

      if (getData.status === 200) return getData.data
   } catch (e) {
      return NotifSwal.failed(e.message)
   }
}


export const clientPatch = async (endPoint, body) => {
   // axiosRetry(ROOT_API, { retries: 3 });

   try {
      let getData = await ROOT_API.patch(endPoint, body)

      if (getData.status === 200) return getData.data
   } catch (e) {
      return NotifSwal.failed(e.message)
   }
}
