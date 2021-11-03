import axios from "axios";
import router from "next/router";
import { useEffect } from "react";

const Admin = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/me", {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      })
      .then(() => router.push("/admin/analytics"))
      .catch(() => router.push("/admin/login"));
  }, []);

  return null;
};

export default Admin;
