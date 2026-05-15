import{ BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home  from "../pages/Home";
import LoginPage  from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductPages from "../pages/ProductPage";
function App(){
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductPages/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      
      
    </Routes>
   </Router>
  );
}

export default App;