// reducer
export default function categories(state = []) {
    return state; // nothing to do here, but we need products node in redux store
}

// selectors
export function getCategories(state, props) {
    return state.categories;
}

export function getCategory(state, props) {
    return state.categories.find(item => item.id === props.id);
}
