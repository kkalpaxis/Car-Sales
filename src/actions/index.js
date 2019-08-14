import { ADD_FEATURE } from "../constants/action-types";

export function addFeature(newFeature) {
    return { 
        type: ADD_FEATURE, 
        payload: newFeature 
    }
};