// TODO: update types
const filtersReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'UPDATE NAME':
            return { ...state, name: action.value };
        default:
            return state;
    }
};

export default filtersReducer;
