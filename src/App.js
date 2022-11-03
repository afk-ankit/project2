import './App.css';
import { auth, provider } from './firebase';
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userLogin, userLogout } from './Slices/userSlice';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import AuthProvider from './AuthProvider';
import Product from './components/Product';
import Wishlist from './components/Wishlist';

function App() {


  const dispatch = useDispatch()
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          userLogin({
            userName: user.displayName,
            uid: user.uid
          })
        )

      }
    })
    return () => {
      unsub()
    }

  }, [])


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<AuthProvider><h1>cart</h1></AuthProvider>} />
        <Route path='/wishlist' element={<AuthProvider><Wishlist /></AuthProvider>} />
      </Routes>
      {/* <Product /> */}
    </div >
  );
}

export default App;
