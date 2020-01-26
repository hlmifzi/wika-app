import { clientGet } from "../../../MyServices/api/URLApi";

const endpointGetTypeMutation = "typeMutation";
const endpointGetKindMutation = "kindMutation"

export const getTypeMutation = () => clientGet(endpointGetTypeMutation, {});
export const getKindMutation = () => clientGet(endpointGetKindMutation, {});