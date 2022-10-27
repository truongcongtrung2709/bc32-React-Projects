let seats =[];

export default function SeatsReducer(state= seats, action){
    switch(action.type){
        case 'DISPLAY_SEAT':
            return [...state, action.payload];
        default:
            return state;
    }
}