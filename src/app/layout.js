import "./globals.css";

export const metadata = {
  title: "Shade - Social Media Network",
  description: "Shade - Social Media Network ",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className>{children}</body>
    </html>
  );
}
