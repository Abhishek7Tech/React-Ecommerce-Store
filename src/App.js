import Home from "./components/Routes/Home/home.component";
import { Route, Routes} from "react-router-dom";
import Navigation from "./components/Routes/navigation/navigation.component";
import SignIn from "./components/Routes/Sign-in/sign-in.component";

function App() {
 
  const Shop = () => {
    return <h1>Hi From Shop Page</h1>;
  };
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path = "/sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
}
export default App;
