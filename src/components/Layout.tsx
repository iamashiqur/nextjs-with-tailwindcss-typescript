import React from "react";
import Header from "./Header";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default App;
