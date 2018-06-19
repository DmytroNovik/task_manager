const VisibilityFilter = (state="ALL",action) => {
    switch(action.filter){
        case "SHOW_COMPLETED":
            return state = "COMPLETED";
        case "SHOW_ACTIVE":
            return state = "ACTIVE";
        case "SHOW_TODAY":
            return state = "TODAY";
        case "SHOW_7DAYS":
            return state = "7DAYS";
        default:
            return state = "ALL";
    }
}
export default VisibilityFilter;