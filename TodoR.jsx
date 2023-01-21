import LoginR from "./LoginR";
import HomeR from "./HomeR";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import withNavigation from "./WithNavigation";
import List from "./List";
import withParam from "./withParam";
import HeaderComponent from "./HeaderComponent";
import Footer from "./Footer";
import Logout from "./Logout";
function TodoR() {
  const LoginRwithNavigation = withNavigation(LoginR);
  //const HomeRwithNavigation = withNavigation(HomeR);
  const HomeRwithParam = withParam(HomeR);
  const HeaderComponentwithNavigation = withNavigation(HeaderComponent);
  const LogoutwithParam = withParam(Logout);
  // const ListwithParam = withParam(List);

  return (
    <div className="Todo">
      <Router>
        <HeaderComponentwithNavigation />
        <Routes>
          <Route path="/login" element={<LoginRwithNavigation />}></Route>
          <Route path="/home/:name" element={<HomeRwithParam />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/" element={<LoginRwithNavigation />}></Route>
          <Route path="*" element={<ErrorComponent />}></Route>
          <Route path="/Logout" element={<LogoutwithParam />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
function ErrorComponent() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h3 className="er" style={{ marginBottom: "443px" }}>
          Error 404 page
        </h3>
      </div>
    </div>
  );
}

export default TodoR;
