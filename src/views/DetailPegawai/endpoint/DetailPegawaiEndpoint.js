import { clientGet, clientPatch } from '../../../MyServices/api/URLApi'

const endPointDataPegawai = 'user/'

export const getDataPegawai = (id) => clientGet(`${endPointDataPegawai}${id}`, {})
export const updateDataPegawai = (id, body) => clientPatch(`${endPointDataPegawai}${id}`, body)