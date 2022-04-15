import Layout from "../components/Layout";
import Carousel1 from "../components/Carousel";
import About from "../components/About";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Contact from '../components/Contact';

export default function Index() {
    return (
        <Layout>
            <Carousel1 />
            <About />
            <Services />
            <Experience />
            <Contact />
        </Layout>
    )
}