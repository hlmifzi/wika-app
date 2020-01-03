import { client } from '../../../MyServices/api/URLApi'

const endPointGetDataStatistik = 'v2/5e07a05532000073001f9cf8'
const endPointGetDataKomposisiPegawai = 'v2/5e07a09832000086801f9cfa'
const endPointGetDataPendidikan = 'v2/5e07a07a32000073001f9cf9'
const endPointGetDataDKategoriProyek = 'v2/5e07a0b0320000f9741f9cfb'
const endPointGetDataBODGroup = 'v2/5e07a0c732000087801f9cfc'
const endPointGetDataAssessment = 'v2/5e07a0dd32000093001f9cfd'
const endPointGetDataAssessment2 = 'v2/5e07a0f332000073001f9cfe'
const endPointGetDataMasaKerja = 'v2/5e07a10f32000089801f9cff'
const endPointGetDataUnitKerja = 'v2/5e07a12332000086801f9d00'
const endPointGetDataMBTI = 'v2/5e07a13832000086801f9d01'

export const getDataStatistikEndPoint = () => client(endPointGetDataStatistik, { method: "GET" })
export const getDataKomposisiPegawaiEndPoint = params => client(endPointGetDataKomposisiPegawai, { method: "GET" })
export const getDataPendidikanEndPoint = params => client(endPointGetDataPendidikan, { method: "GET" })
export const getDataDKategoriProyekEndPoint = params => client(endPointGetDataDKategoriProyek, { method: "GET" })
export const getDataBODGroupEndPoint = params => client(endPointGetDataBODGroup, { method: "GET" })
export const getDataAssessmentEndPoint = params => client(endPointGetDataAssessment, { method: "GET" })
export const getDataAssessment2EndPoint = params => client(endPointGetDataAssessment2, { method: "GET" })
export const getDataMasaKerjaEndPoint = params => client(endPointGetDataMasaKerja, { method: "GET" })
export const getDataUnitKerjaEndPoint = params => client(endPointGetDataUnitKerja, { method: "GET" })
export const getDataMBTIEndPoint = params => client(endPointGetDataMBTI, { method: "GET" })