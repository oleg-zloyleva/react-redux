const initState = [
        {title: "First task", done: true}
    ];

export default (state=initState, action) => {
    console.log(action);

    if(action.type === "ADD_TASK"){
        return [
            ...state,
            {title: action.payload, done: false}
        ]
    }
    return state;
};