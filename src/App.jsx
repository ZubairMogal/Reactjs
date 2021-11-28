import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import Double from "./pages/double/Double";
import Triple from "./pages/triple/Triple";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/post/:id">
       <Single />
        </Route>
        <Route path="/post2/:id">
          <Double />
        </Route>
        <Route path="/post3/:id">
          <Triple />
        </Route>
       
        </Switch>
    </Router>
  );
}

export default App;
