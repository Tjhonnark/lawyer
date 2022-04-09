import Navbar from './Navbar';
import Contact from './Contact';

export default function Layout(props){
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className=''>
                {props.children}
            </main>
            <footer>
                <Contact />
            </footer>
        </>
    )
}