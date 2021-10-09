import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { history, store } from "./store";
import { Router } from "./pages";

import "./styles/index.scss";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
