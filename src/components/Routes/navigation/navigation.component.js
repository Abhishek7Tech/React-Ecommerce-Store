import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropDown from "../../cart-dropdown/cart-dropdown.component";
import { CartDropDownContext } from "../../../contexts/cart-dropdown-context";

const Navigation = () => {
  const { currentUser} = useContext(UserContext);
   const {dropDown} = useContext(CartDropDownContext);

  
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
