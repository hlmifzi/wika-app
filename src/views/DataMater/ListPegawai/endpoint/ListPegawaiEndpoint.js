import { clientGet, clientPost } from '../../../../MyServices/api/URLApi'

const endPointGetFilterPegawai = 'user'
const endPointGetFilterDashboard = 'user/analytics'
const endPointUploadExcel = 'user/upload/excel'
const endPointGetAllFungsi = 'fieldFunction'

export const getDataFilterPegawai = () => clientGet(endPointGetFilterPegawai, {})
export const getDataFilterJabatan = () => clientGet('position', {})
export const getDataFilterDashboard = (params) => {
    let url = `${endPointGetFilterDashboard}/${params.type}/${params.field}`
    if (params.type === 'durationOnOffice') url = `${endPointGetFilterDashboard}/${params.type}/${params.field}/${params.field2}`
    return clientGet(url, {})
}

export const getDataGetAllFungsi = () => clientGet(endPointGetAllFungsi, {})
export const getDataGetAllUnitKerja = () => clientGet('workUnit', {})
export const uploadExcel = (body) => clientPost(endPointUploadExcel, body)
export const downloadExcel = () => clientGet('user/report/profile', {})
export const downloadExcelTemplate = () => clientGet('user/template/excel', {})