export default (state=[{title: "First task"}], action) => {
    console.log(action);

    if(action.type === "ADD_TASK"){
        return [
            ...state,
            {title: action.payload}
        ]
    }
    return state;
};