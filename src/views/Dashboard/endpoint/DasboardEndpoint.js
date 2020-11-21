import { clientGet } from '../../../MyServices/api/URLApi'

const endPointGetDataStatistik = 'analytics/statistics'
const endPointGetDataKomposisiPegawai = 'analytics/employeeComposition'
const endPointGetDataPendidikan = 'analytics/educations'
const endPointGetDataDKategoriProyek = 'analytics/projectCategory'
const endPointGetDataBODGroup = 'analytics/bodGroup'
const endPointGetDataMasaKerja = 'analytics/durationOnOffice'
const endPointGetDataUnitKerja = 'analytics/divisi'
const endPointGetDataMBTI = 'analytics/mbti'
const endPointGetDataAssessment = 'analytics/assesment'

export const getDataStatistikEndPoint = () => clientGet(endPointGetDataStatistik, {})
export const getDataKomposisiPegawaiEndPoint = () => clientGet(endPointGetDataKomposisiPegawai, {})
export const getDataPendidikanEndPoint = () => clientGet(endPointGetDataPendidikan, {})
export const getDataDKategoriProyekEndPoint = () => clientGet(endPointGetDataDKategoriProyek, {})
export const getDataBODGroupEndPoint = () => clientGet(endPointGetDataBODGroup, {})
export const getDataAssessmentEndPoint = () => clientGet(endPointGetDataAssessment, {})
export const getDataMasaKerjaEndPoint = () => clientGet(endPointGetDataMasaKerja, {})
export const getDataUnitKerjaEndPoint = () => clientGet(endPointGetDataUnitKerja, {})
export const getDataMBTIEndPoint = () => clientGet(endPointGetDataMBTI, {})