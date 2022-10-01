import { Outlet, Link } from "react-router-dom";
import { Fragment} from "react";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropDown from "../../cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";

const Navigation = () => {
  
 const currentUser = useSelector(selectCurrentUser);

  const dropDown = useSelector(selectIsCartOpen);
  
  const signOutHander = async () =>{
     await signOutUser();
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser !== null ? (
            <Link className="nav-link" to="/auth" onClick = {signOutHander}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
            <CartIcon />
        </div>
       {dropDown && <CartDropDown /> }
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
