import { createSelector } from 'reselect'
export const selectTodoIds = createSelector(
    // First, pass one or more "input selector" functions:
    state => state,
    // Then, an "output selector" that receives all the input results as arguments
    // and returns a final result value
    state => state.map(todo => todo.id)
)