import Footer from "./Footer";
import Header from "./Header";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default App;
