import { clientGet } from '../../../MyServices/api/URLApi'

const endPointFileManager = 'fileManagement'

export const getFileManager = () => clientGet(endPointFileManager, {})