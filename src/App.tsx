import React from 'react';
import MainRoutes from './routes/routes';
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

function App() {
    return (
        <div className="app">
            <Header/>
            <MainRoutes/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;