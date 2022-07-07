import {
  Homepage,
  DaftarJual,
  Login, 
  SignUp,
  UserForm,
  ProductForm,
  ProductDetail,
  InfoPenawar1,
  InfoPenawar2,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="daftar-jual" element={<DaftarJual />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="product-detail" element={<ProductDetail />} />
          <Route path="info-penawar" element={<InfoPenawar1 />} />
          <Route path="info-penawar2" element={<InfoPenawar2 />} />
          <Route path="edit-profile" element={<UserForm />} />
          <Route path="edit-product" element={<ProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
