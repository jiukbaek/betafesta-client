import router from "next/router";
import { useEffect } from "react";

const Admin = () => {
  useEffect(() => {
    if (sessionStorage.getItem("logged") !== "Y") {
      router.push("/admin/login");
    } else {
      router.push("/admin/analytics");
    }
  }, []);

  return null;
};

export default Admin;
