import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Shade - Social Media Network",
  description: "Shade - Social Media Network ",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="synthwave">
      <body className>
        <Nav/>
        <Sidebar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
