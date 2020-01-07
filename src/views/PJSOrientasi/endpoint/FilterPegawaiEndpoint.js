import { client } from '../../../MyServices/api/URLApi'

const endPointGetFilterPegawai = 'v2/5e133b253100004f00d476b5'

export const getDataFilterPegawai = () => client(endPointGetFilterPegawai, { method: "GET" })