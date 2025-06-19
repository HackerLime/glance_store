import { jwtDecode } from "jwt-decode";

export const checkToken = () => {
  const dateNow = Date.now().toString();
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  const { exp } = jwtDecode(token);
  const getMyFormat = (num: number) => {
    if (typeof num === "number") {
      const res = num.toString().split("").splice(0, 10).join("");
      return Number(res);
    }
    return 0;
  };

  if (getMyFormat(exp ? exp : 0) - getMyFormat(Number(dateNow)) > 0) {
    return true;
  } else {
    localStorage.removeItem("token");
    return false;
  }
};
