# React Router Data API

## Intro - React Router takes over the world
1. The feature I always wanted
2. The problem is actually nested routes
3. Solution - Data API


## Demo 1 - Move async load from Component to Router
1. Start with the same nested routes demo from intro
2. Move data fetching to loaders
3. Notice how everything loads faster
4. Add an error element to demonstrate what to do when things break


## Demo 2 - Move async action from Component to Router
1. "Create New Project" button
2. Move code from component to router action


## Demo 3 - Move Component loads to defer
1. Add a slow endpoint to project data (for example a project needs to also load a list of related projects, which takes a long time to calculate)
2. Instead of waiting for both endpoints, move the slow endpoint to a `defer`
3. Talk about the tradeoffs between `defer` and normal `loader`
