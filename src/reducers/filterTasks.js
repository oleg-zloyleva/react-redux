export default (state='', action) => {
    if(action.type === "SEARCH_TASK"){
        return action.payload
    }
    return state;
}