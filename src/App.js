import Home from "./components/Routes/Home/home.component";
import { Route, Routes} from "react-router-dom";
import Navigation from "./components/Routes/navigation/navigation.component";
import SignIn from "./components/Routes/authentication/authentication.component";
import Shop from "./components/Routes/shop/shop.component";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path = "/auth" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
}
export default App;
