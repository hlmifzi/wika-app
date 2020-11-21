import { clientGet } from '../../../MyServices/api/URLApi'

const endPointGetPJSOrientasi = 'pjsOrientasi'

export const getDataPJSOrientasi = () => clientGet(endPointGetPJSOrientasi, { method: "GET" })