import React, { useEffect } from 'react';
import './App.css';
import { auth } from './firebase';

//custom compotents
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';

//REDUX components
import { selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  console.log(user);

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
