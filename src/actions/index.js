import { ADD_FEATURE } from "../constants/action-types";
import { REMOVE_FEATURE } from "../constants/action-types"

export function addFeature(newFeature) {
    return { 
        type: ADD_FEATURE, 
        payload: newFeature 
    }
};

export function removeFeature(feature) {
    console.log(feature)
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}