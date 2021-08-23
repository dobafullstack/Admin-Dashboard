import "./App.css";
import "./assets/css/style.css";
import "./assets/vendors/base/vendor.bundle.base.css";
import "./assets/vendors/datatables.net-bs4/dataTables.bootstrap4.css";
import "./assets/vendors/mdi/css/materialdesignicons.min.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Main from "./pages/Main";
import LockScreen from "./pages/LockScreen";
import Login from "./pages/Login";
import Register from "./pages/Register";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className='container-scroller'>
                <Switch>
                    <Route path='/home/'>
                        <Navbar />
                        <div className='container-fluid page-body-wrapper'>
                            <Sidebar />
                            <Main />
                        </div>
                    </Route>
                    <Route path='/' exact>
                        <Redirect to='/home' />
                    </Route>
                    <Route path='/login' exact>
                        <Login />
                    </Route>
                    <Route path='/lockscreen' exact>
                        <LockScreen />
                    </Route>
                    <Route path='/register' exact>
                        <Register />
                    </Route>
                    <Route path='/documentation' exact>
                        
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
