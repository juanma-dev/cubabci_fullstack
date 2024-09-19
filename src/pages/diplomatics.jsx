import Head from "next/head";
import NavES from "@/components/NavES";
import Footer from "@/components/Footer";


function Diplomatics() {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Denuncia Cuba BCI</title>
            </Head>
            <NavES parent='Diplomatics' />
            <header>
                <h2>Síndrome de La Habana</h2>
            </header>

            <section>
                <nav id="links">
                    <ul >
                        <li><img src="/US_Embassy_in_Havana.jpg" alt="US Embassy" style={{ width: '200px', height: '160px' }}></img></li><br />
                        <li><a href="https://www.nytimes.com/es/2019/07/23/espanol/cuba-diplomaticos-cerebro.html" target="_blank" rel="noopener noreferrer">Ataque a cerebro de diplomáticos de EEUU en Cuba</a></li>
                    </ul>
                </nav>

                <article>
                    El gobierno comunista de Cuba realizó en el año 2016 "ataques acústicos" a dimplomáticos de Estados Unidos en Cuba. El periódico CNN escribe en una <a href="https://cnnespanol.cnn.com/2019/07/23/un-estudio-sugiere-que-los-ataques-sonicos-de-cuba-cambiaron-el-cerebro-de-las-personas/" target="_blank" rel="noopener noreferrer">publicación</a> sobre lo que ocurrió con los ataques, a continuación lo cito:<br /><br />

                    Lo que sucedió detrás de los "ataques acústicos" experimentados por el personal del gobierno de Estados Unidos en La Habana, Cuba, a partir de finales de 2016 sigue siendo un misterio, pero un nuevo estudio publicado el martes busca pistas en el cerebro de los trabajadores que quedaron expuestos a ellos.<br /><br />

                    Las exploraciones cerebrales por resonancia magnética de 40 pacientes —23 hombres y 17 mujeres— mostraron variaciones en la estructura cerebral y la conectividad funcional, que mide las relaciones entre diferentes regiones cerebrales, en comparación con otros 48 adultos. Las exploraciones se tomaron entre agosto de 2017 y junio de 2018.<br /><br />

                    "Hubo diferencias grupales en todo el cerebro", dijo la autora del estudio Ragini Verma, profesora de radiología y neurocirugía en la Escuela de Medicina Perelman de la Universidad de Pensilvania. "Especialmente en un área llamada cerebelo, que también está implicada en el tipo de síntomas clínicos que la mayoría de estos pacientes estaban demostrando, que son el equilibrio, el movimiento ocular, el mareo, etc".<br /><br />

                    Según el estudio, también se observaron diferencias en la conectividad en las áreas auditiva y visuoespacial del cerebro. Sin embargo, los autores señalan que la importancia clínica de estos hallazgos es incierta, y que no tuvieron imágenes por resonancia magnética anteriores de los pacientes para comparar cómo se veían sus cerebros antes de los incidentes.<br /><br />

                    La mayoría de los pacientes reportaron problemas con la memoria, la concentración, el equilibrio, la vista, la audición, el sueño o los dolores de cabeza que duraron más de tres meses.<br /><br />

                    Muchos informaron sentirse "mentalmente confusos" o "ralentizados" durante meses, dijeron los autores. Algunos informaron irritabilidad y nerviosismo, con dos criterios de reunión para el trastorno de estrés postraumático. También se observó un desempeño laboral más pobre.<br /><br />

                    Tres personas eventualmente necesitaron audífonos para una pérdida auditiva de moderada a severa, y otras tenían zumbidos o presión en sus oídos. Más de la mitad necesitaba que le recetaran un medicamento para dormir o para tratar los dolores de cabeza. Muchos no pudieron regresar al trabajo, al menos por un período de tiempo.<br /><br />

                    El periódico The New York Times plantea en una <a href="https://www.nytimes.com/es/2019/07/23/espanol/cuba-diplomaticos-cerebro.html" target="_blank" rel="noopener noreferrer">publicación</a> que si la presentación refleja un daño físico de un arma enigmática o algo más, aún está muy lejos de quedar claro, reconocieron los autores. Alcanzar una conclusión firme requeriría probablemente de muchos casos más, una situación que nadie está esperando encontrar.<br /><br />
                </article>
            </section>
            <Footer />
        </>
    );
}

export default Diplomatics;