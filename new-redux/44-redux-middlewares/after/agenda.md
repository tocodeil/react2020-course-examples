# Redux Middlewares

- [x] What Are Middlewares

 dispatch({ ... }) ---> Middleware ----> Store

- [x] Building a simple Logger middleware

```
const reduxMiddlewareDemo = store => next => action => {
    // middleware code goes here
    console.log(`Action: ${JSON.stringify(action)}`);

    next(action);
};
```

- [x] Middleware structure:
  - [x] Before next()
  - [x] After next()
  - [x] Difference between next() and dispatch()

- [x] Demo: Freeze Middleware
  - [x] Create freeze slice and actions
  - [x] Create middleware
  - [x] Test in browser console

  









