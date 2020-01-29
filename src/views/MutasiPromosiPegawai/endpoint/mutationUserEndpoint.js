import { clientGet, clientPost } from "../../../MyServices/api/URLApi";

const endpointGetTypeMutation = "typeMutation";
const endpointGetKindMutation = "kindMutation";
const endpointMutation = "mutation";
const endpointGetWorkUnit = "workUnit";
const endpointGetPosition = "position";
const endpointGetFieldFunction = "fieldFunction";
const endpointGetGrade = "grade";
const endpointGetEmployeeStatus = "common/master/employeeStatus"
const endpointGetTitleName = "common/master/titleName"


export const getTypeMutation = () => clientGet(endpointGetTypeMutation, {});
export const getKindMutation = () => clientGet(endpointGetKindMutation, {});
export const storeMutation = (body) => {
    clientPost(endpointMutation, body);
}

export const getFilterMutation = (params) => {
    let url = `${endpointMutation}?dateFrom=${params.dateFrom}&dateTo=${params.dateTo}`
    return clientGet(url, {})
}

export const getWorkUnit = () => clientGet(endpointGetWorkUnit, {});
export const getPosition = () => clientGet(endpointGetPosition, {});
export const getFieldFunction = () => clientGet(endpointGetFieldFunction, {});
export const getGrade = () => clientGet(endpointGetGrade, {});
export const getEmployeeStatus = () => clientGet(endpointGetEmployeeStatus, {});
export const getTitleName = () => clientGet(endpointGetTitleName, {});