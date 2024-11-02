-npm init
-git init 
-install tailwind
-daisy ui library(to pre build components)
-add navbar to app.jsx
-created seperate navbar
-installed react-router-dom
-create browser router->Routes->route=/ Body->route children
-creating outlet in body component

-to access data from one port (domain) to another port(domain)
-install cors in backend(app.js) and set up cookies at browser ->cors operations(origin: we have to put out front end domain url and credentials true)
-at fronend at axios call {withCredentials:true}
-install redux-toolkit(documentation)
-install react-redux 
-create configureStore=>Provider=>createSlice=>add reducer to reducer
-we should not be able to access other routes without login
-if token is not present, redirect to login
-logout
-profile
-in eslint.config. js -> rules
        "react/prop-types": "off"//to ignore eslint proptypes missing validation error
-while making post calls if we don't have any data to post should put {} as a second parameter


Body
    NavBar
    Route=/-=>feed
    Route=/login=>Login
    Route=/connections=>connections
    route=/profile=>profile