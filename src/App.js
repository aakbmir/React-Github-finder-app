import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GithubProvider } from "./context/GlobalContext";
import { AlertProvider } from "./context/alert/AlertContext";

import Header from "./components/githubFinder/layout/Header";
import Footer from "./components/githubFinder/layout/Footer";
import About from "./components/githubFinder/pages/About";
import NotFound from "./components/githubFinder/pages/NotFound";
import Home from "./components/githubFinder/Home";
import User from "./components/githubFinder/pages/User";

function AppComponent() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className="flex flex-col justify-between h-screen">
            <Header></Header>
            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route exact path="/" element={<Home></Home>}></Route>
                <Route exact path="/about" element={<About></About>}></Route>
                <Route exact path="/user/:login" element={<User></User>}></Route>
                <Route exact path="/notfound" element={<NotFound></NotFound>}></Route>
                <Route exact path="/*" element={<NotFound></NotFound>}></Route>
              </Routes>
            </main>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default AppComponent;
