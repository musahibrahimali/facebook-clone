import React, { useEffect } from 'react';
import { Header, SideBar, Feed, Widgets, Login } from '../Components/exports';
import { useStateValue } from '../Provider/stateProvider';
import { authentication } from '../Config/firebase';
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    authentication.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {
        !user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <SideBar />
              <Feed />
              <Widgets />
            </div>
          </>
        )
      }
    </>
  );
}

export default App;
