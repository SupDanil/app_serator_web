import 'materialize-css'
import {useRoutes} from "./Routes";
import {BrowserRouter as Router} from "react-router-dom"
import {useAuth} from "./Hooks/auth.hook";
import {AuthContext} from "./Context/AuthContext";
import {NavBar} from "./Components/NavBar";
import {Loader} from "./Components/Loader";

function App() {
    const {login, logout, token, userId, ready} = useAuth()
    const routes = useRoutes()

    if(!ready) {
        return <Loader />
    }

    return (
        <AuthContext.Provider value={{
            login, logout, token, userId,
        }}>
            <Router>
                <div className="container">
                    {routes}
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
