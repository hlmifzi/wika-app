import { clientGet, clientPost } from "../../../MyServices/api/URLApi";

const endpointGetTypeMutation = "typeMutation";
const endpointGetKindMutation = "kindMutation";
const endpointStoreMutation = "mutation";
const endpointGetWorkUnit = "workUnit";
const endpointGetPosition = "position";
const endpointGetFieldFunction = "fieldFunction";
const endpointGetGrade = "grade";

export const getTypeMutation = () => clientGet(endpointGetTypeMutation, {});
export const getKindMutation = () => clientGet(endpointGetKindMutation, {});
export const storeMutation = (body) => {
    clientPost(endpointStoreMutation, body);
}

export const getWorkUnit = () => clientGet(endpointGetWorkUnit, {});
export const getPosition = () => clientGet(endpointGetPosition, {});
export const getFieldFunction = () => clientGet(endpointGetFieldFunction, {});
export const getGrade = () => clientGet(endpointGetGrade, {});