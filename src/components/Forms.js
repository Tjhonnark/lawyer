

export default function Forms() {
    return (
        <form className="contact" method="POST" data-netlify="true">
            <p>
                <input type="text" className="name" placeholder="Nombre" />
            </p>
            <p>
                <input type="email" className="email" placeholder="Email"/>
            </p>
            <p>
                <textarea className="message" placeholder="Mensaje"></textarea>
            </p>
            <p>
                <button type="submit">Enviar</button>
            </p>
        </form>        
    )
}