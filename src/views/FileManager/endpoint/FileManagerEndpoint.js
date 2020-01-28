import { clientGet } from '../../../MyServices/api/URLApi'

const endPointFileManager = 'user/'

export const getFileManager = (id) => clientGet(`${endPointFileManager}${id}`, {})