'use client'
import { useEffect } from "react";
import Nav from "../components/Nav";
import "@/app/assets/css/join.css";

const Join = () => {
    useEffect(() => {
        function showSection(section) {
            // Remove 'active' class from all sections
            document.querySelectorAll('.playground .layout').forEach(function (el) {
                el.classList.remove('active');
            });

            // Add 'active' class to the selected section
            document.querySelector(`.${section}`).classList.add('active');

            // Scroll the selected section into view
            document.querySelector(`.${section}`).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function handleRegisterClick() {
            showSection("section1");
        }

        function handleLoginClick() {
            showSection("section2");
        }

        // Add event listeners to the buttons after the DOM is loaded
        document.addEventListener("DOMContentLoaded", function() {
            const registerButton = document.querySelector("#register");
            const loginButton = document.querySelector("#login");

            if (registerButton) {
                registerButton.addEventListener("click", handleRegisterClick);
            }

            if (loginButton) {
                loginButton.addEventListener("click", handleLoginClick);
            }
        });
        
        // Clean up event listeners when the component unmounts
       
    }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

    return (
        <>
            <Nav />
            <main className="join">
                <div className="playground">
                    <div className="layout section1">
                        <div className="login-container">
                            <h1>Join Shades!</h1>
                            <div className="line" />
                            <div className="tabs">
                                <button
                                    id="register"
                                    style={{ borderBottomColor: "red" }}
                                >
                                    Register
                                </button>
                                <button id="login">Login</button>
                            </div>
                            <form action="/api/join.php" method="post" id="registerForm">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    id="username"
                                    name="username"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    id="pwd"
                                    name="pwd"
                                    required
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
                                <button id="register">Register</button>
                                <button
                                    id="login"
                                    style={{ borderBottomColor: "red" }}
                                >
                                    Login
                                </button>
                            </div>
                            <form action="/api/join.php" method="post" id="loginForm">
                                <input
                                    type="text"
                                    placeholder="Username or Email"
                                    id="loginUsername"
                                    name="loginUsername"
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    id="loginPwd"
                                    name="loginPwd"
                                    required
                                />
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            {/* Include Footer and Script components here */}
        </>
    );
};

export default Join;
