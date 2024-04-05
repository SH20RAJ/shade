import Sidebar from "./Sidebar";

export default function() {
    return (
        <>
        <div className="flex pt-2">
            <Sidebar/>
            <div id="maincontent" className="flex min-h-screen bg-red-200 w-full"></div>
        </div>
        </>
    )
}