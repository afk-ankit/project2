import { async } from "@firebase/util"
import { signInWithPopup, signOut } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { auth, provider } from "../firebase"
import { userLogout } from "../Slices/userSlice"

function Navbar() {
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider)

        } catch (error) {
            alert(error.message)
        }
    }

    const handleLogout = async () => {
        try {

            await signOut(auth)
            dispatch(userLogout())

        } catch (error) {
            alert(error.message)
        }
    }
    const user = useSelector(state => state.userReducer)
    return (
        <div className="Navbar">
            <div className="navbar__items">
                {user.uid && <>
                    <NavLink to={'/cart'}>
                        <p>Cart</p>
                    </NavLink>
                    <NavLink to={'/wishlist'}>
                        <p>Wishlist</p>
                    </NavLink>
                </>}

                <NavLink to={'/'}>
                    <p>Home</p>
                </NavLink>

                {!user.uid && <button onClick={handleLogin}>Login</button>}


                <button onClick={handleLogout}>Logout</button>

            </div>
        </div>
    )
}

export default Navbar   