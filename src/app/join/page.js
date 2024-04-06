'use client';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "@/app/assets/css/join.css";
import Script from "next/script";

const Join = () => {
  return (
    <>
      <Nav />
      <main className="join">
        {/* <div class="tabs hidden">
      <button onclick="showSection('section1')">Register</button>
      <button onclick="showSection('section2')">Login</button>
  </div> */}
        <div className="playground">
          <div className="layout section1">
            <div className="login-container">
              <h1>Join Shades!</h1>
              <div className="line" />
              <div className="tabs">
                <button
                  onclick="showSection('section1')"
                  style={{ borderBottomColor: "red" }}
                >
                  Register
                </button>
                <button id="login" onclick="showSection('section2')">Login</button>
              </div>
              <form action="/api/join.php" method="post" id="registerForm">
                <input
                  type="text"
                  placeholder="Userame"
                  id="username"
                  name="username"
                  required=""
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  required=""
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="pwd"
                  name="pwd"
                  required=""
                />
                <button type="submit">Register</button>
              </form>
            </div>
          </div>
          <div className="layout section2">
            <div className="login-container">
              <h1>Join Shades!</h1>
              <div className="line" />
              <div className="tabs">
                <button id="register" onclick="showSection('section1')">Register</button>
                <button
                  onclick="showSection('section2')"
                  style={{ borderBottomColor: "red" }}
                >
                  Login
                </button>
              </div>
              <form action="/api/join.php" method="post" id="registerForm">
                <input
                  type="text"
                  placeholder="Userame or Email"
                  id="username"
                  name="username"
                  required=""
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="pwd"
                  name="pwd"
                  required=""
                />
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Script src="join.js"></Script>
      <Footer />
    </>
  );
};

export default Join;
