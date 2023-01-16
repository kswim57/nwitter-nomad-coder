import React from "react";
import { HashRouter as Router, Route, Routes }from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn }) => {
    
    return(
    <Router>
        {isLoggedIn && <Navigation />}
        <Routes>
            {isLoggedIn ? (
                <>
                    <Route exact path ="/">
                        <Home />
                    </Route>
                    <Route exact path ="/profile">
                        <Profile />
                    </Route>
                </>
            ) : ( 
                <>
                    <Route exact path="/"> 
                        <Auth /> 
                    </Route>

                </>
            )}
        </Routes>
    </Router>
    )
}

export default AppRouter;