import Head from 'next/head';
import Navbar from './Navbar';
import Contact from './Contact';

export default function Layout(props){
    return (
        <>
            <Head>
                <title>RGarcia Abogado</title>
                <meta name="description" content="Abogado y Consultor que ofrece servicios legales a personas y empresas nacionales e internacionales." />

                {/* FACEBOOK */}
                <meta property="og:title" content="RGarcia Abogado" />
                <meta property="og:description" content="Abogado y Consultor que ofrece servicios legales a personas y empresas nacionales e internacionales." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="rgarciabogado.ga" />
                <meta property="og:image" content="" />
                {/* TWITTER */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="RGarcia Abogado"/>
                <meta name="twitter:creator" content=""/>
            </Head>
            <Navbar />
            <main className='row'>
                {props.children}
            </main>
            <footer>
                <Contact />
            </footer>
        </>
    )
}