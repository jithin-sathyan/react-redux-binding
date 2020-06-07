import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import "antd/dist/antd.css";

import NormalParentComponent from "./content/NormalComponent";

//Theming fonts
import fontTheme from './utils/fontTheme';
import GlobalStyles from './utils/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={fontTheme}>
      <Router>
        <Suspense fallback="loading">
          <Switch>
            {/* <Route exact path="/redux-heirarchy" component={LoginComponent} /> */}
            <Route exact path="/normal-heirarchy" component={NormalParentComponent} />
            <Route path="/" exact render={() => <Redirect to="/normal-heirarchy" />} />
          </Switch>
        </Suspense>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
