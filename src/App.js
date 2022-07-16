import {
  Homepage,
  DaftarJual,
  Login, 
  SignUp, 
  EditUserForm,
  AddProductForm,
  EditProductForm,
  ProductDetail,
  BuyerProductDetail,
  InfoPenawar,
  InfoPenawar2,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedToken from "./auth/ProtectedToken";
import NavigateToHome from "./auth/NavigateToHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={ 
            <NavigateToHome>
              <Login />
            </NavigateToHome>
          } />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="daftar-jual" element={
            <ProtectedToken>
              <DaftarJual />
            </ProtectedToken>
           } />
          <Route path="detail-produk/:id" element={
            <ProtectedToken>
              <ProductDetail />
            </ProtectedToken>
            } />
          <Route path="buyer/product-detail" element={
            <ProtectedToken>
              <BuyerProductDetail />
            </ProtectedToken>
            } />
          <Route path="info-penawar/:id" element={ 
            <ProtectedToken>
              <InfoPenawar />
            </ProtectedToken>
            } />
          <Route path="info-penawar2" element={
            <ProtectedToken>
              <InfoPenawar2 />
            </ProtectedToken>
            } />
          <Route path="edit-profile" element={ 
            <ProtectedToken>
              <EditUserForm />
            </ProtectedToken>
            } />
          <Route path="add-product" element={
            <ProtectedToken>
              <AddProductForm />
            </ProtectedToken>
            } />
          <Route path="edit-product/:id" element={
            <ProtectedToken>
              <EditProductForm />
            </ProtectedToken>
              } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
