import { ADD_FEATURE } from "../constants/action-types";
import { REMOVE_FEATURE } from "../constants/action-types";

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
        },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FEATURE: 
            const newFeatures = [...state.car.features, action.payload]
            const filteredStore = state.store.filter((feature) => feature != action.payload)
            const priceAdded = state.additionalPrice + action.payload.price
            return{...state, car: {...state.car, features: newFeatures}, 
            store: filteredStore, additionalPrice: priceAdded}
        case REMOVE_FEATURE:
            const newStore = [...state.store, action.payload]
            const filteredFeatures = state.car.features.filter((feature) => feature != action.payload)
            const newPrice = state.additionalPrice - action.payload.price
            return{...state, store: newStore, car: {...state.car, features: filteredFeatures},
            additionalPrice: newPrice }
        default:
            return state
    }
};

export default rootReducer;