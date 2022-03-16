export function Contact() {
    return (
        <section id="contact">
         <div className="row">
            <div className="twelve columns main-col">
               <div className="row">
                  <div className="columns texto" align="center">
                     <div>
                        <p>¿Tienes alguna duda?</p>
                        <h2 className="h2Noticias">Envíanos un mensaje</h2>
                        <input type={'text'} placeholder='Ingresa tu correo electrónico'></input>
                        <textarea placeholder='Escribe tu mensaje...'></textarea>
                        <button className='submit'>Enviar</button>
                        <p>Carr, Cananea - Agua Prieta KM 82.5, Industrial, 84623 Cananea, Son.<br />6453320366 | vinculacioncbtis106@gmail.com</p>
                     </div>
                  </div>
                  <div className="columns mapa">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.2657689645766!2d-110.2712407853827!3d30.990965780193225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d0e16372f7c0c1%3A0xdbc45e3e7b2b6fa6!2sCentro%20de%20Bachillerato%20Tecnol%C3%B3gico%20Industrial%20y%20de%20Servicios%20No.%20106!5e0!3m2!1ses-419!2smx!4v1640948031983!5m2!1ses-419!2smx" title="Mapa" style={{border: "0"}} allowfullscreen="" loading="lazy" className="Mapa"></iframe>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
}