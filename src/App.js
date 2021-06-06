import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Writereviews from "./components/Writereviews";
import { auth } from "./components/Firebase";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import { Button } from 'react-bootstrap';
import Example from "./components/Example";
function App() {
  const [user, setUser] = useState(auth.currentUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <Router>
      
      <Navbar/>
      { user && (<h1 style={{textAlign:"center"}}>Welcome {auth.currentUser.displayName}</h1>)}
        {user ? (
          
          <Switch>
            <Route exact path="/Movies">
              <Movies />
            </Route>
            <Route exact path="/Writereviews">
              <Writereviews />
            </Route>
            <Redirect to={user?"/Movies":"/login"}/>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/login" component={Login} />
            <Redirect to={user ? "/" : "/login"} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
