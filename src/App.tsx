import React, { useEffect, useRef } from 'react';
import { store } from "./store.js";
import { Provider, } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/Errors/ErrorBoundary.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Details from './components/Details.js';
import AppRoutes from './routes';
import { _appRoutes } from './redux/route.js'


const App = () => {
  const effectRan = useRef(false)

  const routesArray = [
    {
      id: 1,
      path: '/',
      component: Main
    },
    {
      id: 2,
      path: '/:id/:name/details',
      component: Details
    }
  ];

  useEffect(() => {
    if (effectRan.current === false) {
      (_appRoutes(routesArray));
    }
    return () => {
      effectRan.current = true
    }
  }, [routesArray, _appRoutes]);

  return (
    <BrowserRouter>
      {/* <ErrorBoundary> */}
      <Header />
      {/* </ErrorBoundary> */}
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </BrowserRouter>


  );
}

export default App;
