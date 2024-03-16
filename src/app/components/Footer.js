import Script from "next/script";

export default function(){
    return(
        <>
        <footer>
        Made with ❤️ by <span>@</span>SH20RAJ
    </footer>
    <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
    <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
    <Script src="index.js"></Script>
    </>
    );
}