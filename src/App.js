import {
  Homepage,
  Searchpage,
  DaftarJual,
  Login, 
  SignUp, 
  EditUserForm,
  AddProductForm,
  EditProductForm,
  ProductDetail,
  InfoPenawar,
  OrderHistory
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedToken from "./auth/ProtectedToken";
import NavigateToHome from "./auth/NavigateToHome";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState("");
  const whoami = () => {
    axios
      .get(`https://tokoku-api.herokuapp.com/api/v1/auth/user`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsers(response.data.data);
      });
  };

  useEffect(() => {
    whoami();
  },[])
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<Searchpage />} />
          <Route path="login" element={ 
            <NavigateToHome users={users}>
              <Login />
            </NavigateToHome>
          } />
          <Route path="sign-up" element={
            <NavigateToHome>
              <SignUp />
            </NavigateToHome>
          }/>
          <Route path="daftar-jual" element={
            <ProtectedToken>
                <DaftarJual users={users} />
            </ProtectedToken>
          } />
          <Route path="detail-produk/:id" element={
            <ProtectedToken>
              <ProductDetail users={users} />
            </ProtectedToken>
          } />
          <Route path="info-penawar/:id" element={ 
            <ProtectedToken>
              <InfoPenawar />
            </ProtectedToken>
          } />
          <Route path="edit-profile" element={ 
            <ProtectedToken>
              <EditUserForm users={users} />
            </ProtectedToken>
          } />
          <Route path="tambah-produk" element={
            <ProtectedToken>
              <AddProductForm users={users} />
            </ProtectedToken>
          } />
          <Route path="edit-produk/:id" element={
            <ProtectedToken>
              <EditProductForm />
            </ProtectedToken>
          } />
          <Route path="daftar-order" element={
            <ProtectedToken>
              <OrderHistory users={users} />
            </ProtectedToken>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
