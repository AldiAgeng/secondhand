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
          <Route path="seller/product-detail" element={
            <ProtectedToken>
              <SellerProductDetail />
            </ProtectedToken>
            } />
          <Route path="buyer/product-detail" element={
            <ProtectedToken>
              <BuyerProductDetail />
            </ProtectedToken>
            } />
          <Route path="info-penawar/:id" element={ 
            <ProtectedToken>
              <InfoPenawar1 />
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
          <Route path="edit-product" element={
            <ProtectedToken>
              <EditProductForm />
            </ProtectedToken>
              } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
