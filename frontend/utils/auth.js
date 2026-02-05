export const logout = ()=>{
  localStorage.removeItem("token");
  window.location.href="/";
};

export const isLoggedIn = ()=>{
  return !!localStorage.getItem("token");
};
