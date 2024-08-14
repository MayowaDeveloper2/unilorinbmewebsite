import Footer from "../landingpage/footer";
import Navabar from "../landingpage/Navbar";
import Prospective from "./prospective/prospective";

export default function Page() {
    return (
        <main>
            <Navabar/>
            <Prospective/>
            <Footer/>
        </main>
    )
}