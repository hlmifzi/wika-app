import { clientGet } from '../../../../MyServices/api/URLApi'

const endPointGetFilterPegawai = 'user'

export const getDataFilterPegawai = () => clientGet(endPointGetFilterPegawai, {})