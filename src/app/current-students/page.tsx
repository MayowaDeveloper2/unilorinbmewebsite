import Footer from "../landingpage/footer";
import Navabar from "../landingpage/Navbar";
import CurrentStudent from "./currentstudent/currentstudent";

export default function Page() {
    return (
        <main>
            <Navabar/>
            <CurrentStudent/>
            <Footer/>
        </main>
    )
}