# Writing Redux Middlewares

1. Reducer limits
  - Code sharing
  - Async code

2. Solution: Middlewares
  - What are middlewares
  - Redux Middleware template

3. Let's see some code:
  - Logger Middleware
  - Change Words Middleware
















Middleware Template

const reduxMiddlewareDemo = store => next => action => {
    // middleware code goes here
};













