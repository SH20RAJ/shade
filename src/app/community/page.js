import Main from "../components/Main"; // Uncomment this line if you want to use Main2
import Nav from "../components/Nav";
import Footer from "../components/Footer";


export default () => {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        {/* <script src="index.js" defer></script> */}
    </>
  );
}
