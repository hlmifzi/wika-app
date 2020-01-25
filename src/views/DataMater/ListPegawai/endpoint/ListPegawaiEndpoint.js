import { clientGet } from '../../../../MyServices/api/URLApi'

const endPointGetFilterPegawai = 'user'
const endPointGetFilterDashboard = 'user/analytics'
const endPointGetAllFungsi = 'fieldFunction'

export const getDataFilterPegawai = (params) => clientGet(endPointGetFilterPegawai, {})
export const getDataFilterDashboard = (params) => {
    let url = `${endPointGetFilterDashboard}/${params.type}/${params.field}`
    if (params.type === 'durationOnOffice') url = `${endPointGetFilterDashboard}/${params.type}/${params.field}/${params.field2}`
    return clientGet(url, {})
}

export const getDataGetAllFungsi = () => clientGet(endPointGetAllFungsi, {})