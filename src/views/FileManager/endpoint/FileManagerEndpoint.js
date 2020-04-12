import { clientGet, clientPost } from '../../../MyServices/api/URLApi'

const endPointFileManager = 'fileManagement'
const endPointUpload = 'fileManagement?parentId=1'

export const getFileManager = () => clientGet(endPointFileManager, {})
export const getFileManagementById = (id) => clientGet(`${endPointFileManager}/${id}`, {})
export const uploadFile = (body) => clientPost(endPointFileManager, body)