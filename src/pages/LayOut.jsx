import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Outlet } from "react-router-dom";

function LayOut() {
    return (
        <>
            <header>
                <ResponsiveAppBar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default LayOut;