import './App.css';
import { auth, provider } from './firebase';
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userLogin, userLogout } from './Slices/userSlice';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import AuthProvider from './AuthProvider';

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
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/cart' element={<AuthProvider><h1>cart</h1></AuthProvider>} />
        <Route path='/wishlist' element={<AuthProvider><h1>WishList</h1></AuthProvider>} />
      </Routes>
    </div >
  );
}

export default App;
