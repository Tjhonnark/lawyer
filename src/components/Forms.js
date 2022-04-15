

export default function Forms() {
    return (
        <form className="" name="contact" netlify>
            <label>
                <input type="text" name="name" placeholder="Nombre"/>
            </label>
            <label>
                <input type="email" name="email" placeholder="Email"/>
            </label>
            <label htmlFor="">
                <textarea name="message" placeholder="Mensaje"/>
            </label>
            <input type="submit" value="Enviar ">Enviar</input>
        </form>        
    )
}