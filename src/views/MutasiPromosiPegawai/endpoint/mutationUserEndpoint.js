import { clientGet, clientPost } from "../../../MyServices/api/URLApi";

const endpointGetTypeMutation = "typeMutation";
const endpointGetKindMutation = "kindMutation";
const endpointStoreMutation = "mutation"

export const getTypeMutation = () => clientGet(endpointGetTypeMutation, {});
export const getKindMutation = () => clientGet(endpointGetKindMutation, {});
export const storeMutation = (body) => {
    clientPost(endpointStoreMutation, body);
}