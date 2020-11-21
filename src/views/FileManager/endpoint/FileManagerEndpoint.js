import { clientGet, clientPost, clientPatch } from '../../../MyServices/api/URLApi'

const endPointFileManager = 'fileManagement'
const endPointUpload = 'fileManagement?parentId=1'

export const getFileManager = () => clientGet(endPointFileManager, {})
export const getFileManagementById = (id) => clientGet(`${endPointFileManager}/${id}`, {})
export const uploadFile = (body) => clientPost(endPointFileManager, body)
export const update = (body, id = "") => clientPatch(`${endPointFileManager}/${id}`, body)