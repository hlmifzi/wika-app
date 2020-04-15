import { clientGet, clientPost } from "../../../MyServices/api/URLApi";



export const getTypeMutation = () => clientGet('typeMutation', {});
export const getKindMutation = () => clientGet('kindMutation', {});
export const storeMutation = payload => clientPost('mutation', payload)
export const storeMutationMultiple = payload => clientPost('mutation/store_multiple', payload)

export const getFilterMutation = (params) => {
    let url = `mutation${params}`
    return clientGet(url, {})
}

export const getWorkUnit = () => clientGet('workUnit', {});
export const getPosition = () => clientGet('position', {});
export const getFieldFunction = () => clientGet('fieldFunction', {});
export const getGrade = () => clientGet('grade', {});
export const getBodGroup = () => clientGet('/common/master/bodGroup', {});
export const getEmployeeStatus = () => clientGet('common/master/employeeStatus', {});
export const getTitleName = () => clientGet('common/master/titleName', {});
export const downloadExcel = (params) => clientPost(`mutation/report?dateFrom=${params.dateFrom}&dateTo=${params.dateTo}`, {})