import { clientGet } from '../../../MyServices/api/URLApi'

const endpointUserSummaryOverview = 'userSummary/overview'

export const getDataSummaryOverview = () => clientGet(endpointUserSummaryOverview, {})