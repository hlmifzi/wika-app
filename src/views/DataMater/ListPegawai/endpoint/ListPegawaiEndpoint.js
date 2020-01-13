import { clientGet } from '../../../../MyServices/api/URLApi'

const endPointGetFilterPegawai = 'user'
const endPointGetFilterDashboard = 'user/analytics'

export const getDataFilterPegawai = (params) => clientGet(endPointGetFilterPegawai, {})
export const getDataFilterDashboard = (params) => {
    console.log(`${endPointGetFilterDashboard}/${params.type}/${params.field}`)
    return clientGet(`${endPointGetFilterDashboard}/${params.type}/${params.field}`, {})
}