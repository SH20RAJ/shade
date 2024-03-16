import Main from "../components/Main"; // Uncomment this line if you want to use Main2
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Script from "next/script";


export default Page = () => {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
      <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
        <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
        <Script src="index.js" defer></Script>
    </>
  );
}
