import { clientGet } from '../../../MyServices/api/URLApi'

const endPointDataPegawai = 'user/'

export const getDataPegawai = (id) => clientGet(endPointDataPegawai, {params : id})