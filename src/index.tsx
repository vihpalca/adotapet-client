import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from "easy-peasy";
import { ThemeProvider, theme as themeChakra } from "@chakra-ui/core";
import { ThemeProvider as NewThemeProvider } from "styled-components";

import { theme } from './theme';
import store from "./configureStore";
import './index.css';
import Routes from "./routes/index";
import history from "./utils/history";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <NewThemeProvider theme={theme}>
    <ThemeProvider theme={themeChakra}>
      <StoreProvider store={store}>
        <Routes history={history} />
      </StoreProvider>
    </ThemeProvider>
  </NewThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
