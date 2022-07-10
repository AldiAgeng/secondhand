import {
  Homepage,
  DaftarJual,
  Login, 
  SignUp,
  EditUserForm,
  AddProductForm,
  EditProductForm,
  SellerProductDetail,
  BuyerProductDetail,
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
          <Route path="seller/product-detail" element={<SellerProductDetail />} />
          <Route path="buyer/product-detail" element={<BuyerProductDetail />} />
          <Route path="info-penawar" element={<InfoPenawar1 />} />
          <Route path="info-penawar2" element={<InfoPenawar2 />} />
          <Route path="edit-profile" element={<EditUserForm />} />
          <Route path="add-product" element={<AddProductForm />} />
          <Route path="edit-product" element={<EditProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
