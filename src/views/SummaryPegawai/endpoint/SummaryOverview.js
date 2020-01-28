import { clientGet } from '../../../MyServices/api/URLApi'

const endpointUserSummaryOverview = 'userSummary/overview'
const endpointUserSummary = 'userSummary'

export const getDataSummaryOverview = () => clientGet(endpointUserSummaryOverview, {})
export const getDataSummary = () => clientGet(endpointUserSummary, {})