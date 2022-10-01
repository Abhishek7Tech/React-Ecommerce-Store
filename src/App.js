import { useEffect } from "react";
import Home from "./components/Routes/Home/home.component";
import { Route, Routes} from "react-router-dom";
import Navigation from "./components/Routes/navigation/navigation.component";
import SignIn from "./components/Routes/authentication/authentication.component";
import Shop from "./components/Routes/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";
import { createUserDocumentsFromAuth } from "./utils/firebase/firebase.utils";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
            createUserDocumentsFromAuth(user);
        }
       dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  },[dispatch])
 
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop/*" element={<Shop />}></Route>
        <Route path = "/auth" element={<SignIn />}></Route>
        <Route path = "/checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
}
export default App;
