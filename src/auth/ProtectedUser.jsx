import { Navigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";

function ProtectedUser({ children }) {
  const [users, setUsers] = useState("");
  const whoami = () => {
    axios
      .get(`https://tokoku-api.herokuapp.com/api/v1/auth/user`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsers(response.data.data.city);
        console.log(response, "user protected");
        // console.log(users);
      });
    if (
      users === ""
      // users.address === null ||
      // users.phone_number === null
    ) {
      swal({
        title: "Perhatian!",
        text: "Anda belum melengkapi data profile!",
        icon: "warning",
        button: "Uhuyy!",
      });
      return <Navigate to="/edit-profile" />;
    } else {
      return children;
    }
  };

  useEffect(() => {
    whoami();
  }, []);
}

export default ProtectedUser;
