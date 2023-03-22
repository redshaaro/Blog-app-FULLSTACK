import {
  NavBar,
  Home,
  SinglePostPage,
  Login,
  SignUp,
  NewPost,
  Settings,
} from "./imports/components";
import MenuIcon from "@mui/icons-material/Menu";
import { Route, Routes } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "./context/Context";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  const { user, dispatch } = useContext(Context);
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          handleMenu();
        }}
        className="burger-icon"
      >
        <MenuIcon style={{ fontSize: "5rem" }}></MenuIcon>
      </button>

      <NavBar user={user} dispatch={dispatch}></NavBar>
      <SideMenu dispatch={dispatch} user={user} open={open}></SideMenu>
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
          element={user ? <NewPost user={user}></NewPost> : <SignUp></SignUp>}
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
