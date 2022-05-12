**# Todo-app**
JS Todo App using Webpack.

**https://super-basbousa-fe35fe.netlify.app/**

**Challenges and Learnings**
- Functions with for loops to create content is preferable to static content in index.html. Have some static content in Index html which leads to not so pretty reload
- When deploying app, any reference to the 'dist' folder returns a broken link. This is because dist becomes the root once deployed. This took me too long to figure out.
- Building modularly is awesome. Feels more logical and nice being able to compartmentalise each function.
- I would plan out the project at a higher level next time, working out the Static Pages, data models, relationships, and what needs to happen at each part of the user experience (CRUD)
- Didn't use any CSS or Asset loaders. Left those assets in the DIST folder. Next time ill try putting in SRC and using a package to build them in dist.

**To Do**
- edit date
- edit title
- refresh on current page
- remove static content in html to make reloading prettier

**Bugs**
- css when changing width and add button is out of line (need to shorten width of the other elements)
