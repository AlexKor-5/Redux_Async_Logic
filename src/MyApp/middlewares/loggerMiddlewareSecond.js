export const loggerMiddlewareSecond = storeAPI => next => action => {
    console.log('dispatching Second logger', action)
    console.log('next state Second logger', storeAPI.getState())
    return next(action)
}