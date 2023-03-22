import {
  NavBar,
  Home,
  SinglePostPage,
  Login,
  SignUp,
  NewPost,
  Settings,
} from "./imports/components";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user,dispatch } = useContext(Context);
   
  return (
    <>
      <NavBar user={user} dispatch={dispatch}></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/signup"
          element={user ? <Home></Home> : <SignUp></SignUp>}
        ></Route>
        <Route
          path="/login"
          element={user ? <Home></Home> : <Login></Login>}
        ></Route>
        <Route
          path="/post/:id"
          element={<SinglePostPage></SinglePostPage>}
        ></Route>
        <Route
          path="/createpost"
        
          element={user ? <NewPost   user={user}></NewPost> : <SignUp></SignUp>}
        ></Route>
        <Route
          path="/settings"
          element={user ? <Settings></Settings> : <SignUp></SignUp>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
