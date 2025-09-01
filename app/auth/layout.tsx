import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <div className="border-b p-5">Navbar</div>
      {children}
    </div>
  );
};

export default AuthLayout;
