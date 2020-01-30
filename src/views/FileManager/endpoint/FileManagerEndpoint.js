import { clientGet, clientPost } from '../../../MyServices/api/URLApi'

const endPointFileManager = 'fileManagement'
const endPointUpload = 'fileManagementDirectory'

export const getFileManager = () => clientGet(endPointFileManager, {})
export const uploadFile = (body) => clientPost(endPointUpload, body)