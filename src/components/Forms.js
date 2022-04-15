

export default function Forms() {
    return (
        <form name="contact" netlify>
            <p>
                <label><input type="text" name="name" placeholder="Nombre"/></label>
            </p>
            <p>
                <label><input type="email" name="email" placeholder="Email"/></label>
            </p>
            <p>
                <label><textarea name="message" placeholder="Mensaje"/></label>
            </p>
            <p>
                <button type="submit">Enviar</button>
            </p>
        </form>        
    )
}