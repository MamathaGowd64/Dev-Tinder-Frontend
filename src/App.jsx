import { BrowserRouter, Routes, Route } from "react-router-dom"
import Body from "./Components/Body"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import Connections from './Components/Connections'
import Requests from './Components/Requests'
import Feed from "./Components/Feed"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

function App() {
 
  return (
    <>
      <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/feed" element={<Feed />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/profile" element={<Profile />} />
              <Route path="/user/connections" element={<Connections />}/>
              <Route path="/requests" element={<Requests />}/>
            
            </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
      
    </>
  )
}

export default App
