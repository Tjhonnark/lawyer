import Layout from "../components/Layout"
import Carousel from "../components/Carousel"
import About from "../components/About"
import Services from "../components/Services"
import Experiencias from "../components/Experiencias"

export default function Index() {
    return (
        <Layout>
            <Carousel />
            <About />
            <Services />
            <Experiencias />
        </Layout>
    )
}