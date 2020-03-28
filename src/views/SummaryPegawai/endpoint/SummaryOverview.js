import { clientGet, clientPost } from '../../../MyServices/api/URLApi'

const endpointUserSummaryOverview = 'userSummary/overview'
const endpointUserSummary = 'userSummary'

export const getDataSummaryOverview = () => clientGet(endpointUserSummaryOverview, {})
export const getDataSummary = () => clientGet(endpointUserSummary, {})
export const downloadExcel = () => clientGet("user/report/summary", {})