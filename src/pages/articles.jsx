import NavES from "@/components/NavES";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const articles = [
    {
        title: 'La Ley del Descaro: La Codificación del Cinismo en los Regímenes de Venezuela y Cuba',
        introduction: 'En la historia reciente de América Latina, dos regímenes han captado la atención global no solo por sus políticas de control y represión, sino por la forma en que han institucionalizado el cinismo en la gestión del poder. En Venezuela y Cuba, el descaro se ha convertido en una herramienta política, un principio operativo que no solo es practicado sino también, en cierto sentido, "legislado" como parte del día a día. Este artículo explora cómo estos gobiernos han adoptado lo que aquí denominamos "la Ley del Descaro", convirtiendo la desvergüenza en una táctica de supervivencia política.',
        index: 1
    },
    {
        title: 'El Odioísmo: La Fase Superior del Comunismo',
        introduction: 'El comunismo, como ideología, ha dejado una marca indeleble en la historia contemporánea, ofreciendo una visión de un mundo sin clases y con una aparente igualdad económica. Sin embargo, en la práctica, ha demostrado tener defectos profundos que, lejos de eliminar las desigualdades, a menudo las exacerban bajo una nueva forma de control estatal. De estos defectos nace una idea aún más oscura y destructiva: el odioísmo.',
        index: 2
    },
    {
        title: 'El Descaro del Odio: La Respuesta del Pueblo Ante la Opresión en Cuba y Venezuela',
        introduction: 'Cuba y Venezuela, dos naciones marcadas por décadas de regímenes autoritarios, han desarrollado un sistema de control social basado en el odio y el descaro. Estas tácticas, que buscan dividir y oprimir a la población, han creado un entorno en el que la verdad, la justicia y la decencia se ven constantemente amenazadas. En este contexto, el pueblo se enfrenta a la difícil tarea de resistir sin sucumbir a la complicidad con el sistema opresor, mientras contempla la posibilidad de que solo una intervención militar externa o una organización interna bien coordinada puedan traer un cambio real.',
        index: 3
    },
    {
        title: 'La Palabra de Dios contra la tiranía y el odio en Cuba y Venezuela',
        introduction: 'En tiempos de opresión y dictadura, como los vividos en Cuba y Venezuela, donde el gobierno ha instituido la ley del descaro y ha adoptado el odio, los pueblos enfrentan una profunda oscuridad. Estos regímenes no solo buscan controlar y someter físicamente a la población, sino que también intentan destruir su espíritu y aplastar cualquier esperanza de libertad. En medio de estas circunstancias tan adversas, la Palabra de Dios se alza como una fuente inagotable de esperanza, coraje y resistencia.',
        index: 4
    }
];

const ITEMS_PER_PAGE = 2;

function Articles() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const divRefs = useRef([]); // Refs array for the individual divs

    // Get the current page of items to display
    const currentArticles = articles.slice(currentIndex, Math.min(currentIndex + ITEMS_PER_PAGE), articles.length);

    // Handlers for the buttons
    const goToFirst = () => setCurrentIndex(0);
    const goToPrev = () => setCurrentIndex(prev => Math.max(prev - ITEMS_PER_PAGE, 0));
    const goToNext = () => setCurrentIndex(prev => Math.min(prev + ITEMS_PER_PAGE, articles.length - articles.length % ITEMS_PER_PAGE));
    const goToLast = () => setCurrentIndex(articles.length % ITEMS_PER_PAGE === 0 ? articles.length - ITEMS_PER_PAGE : articles.length - articles.length % ITEMS_PER_PAGE);

    // Reset the scroll position of the individual divs when currentIndex changes
    useEffect(() => {
        divRefs.current.forEach((div) => {
            if (div) {
                div.scrollTo(0, 0);  // Reset vertical scroll position if necessary
            }
        });
    }, [currentIndex]);

    return (
        <>
            <NavES parent='Articles' />
            <header>
                <h2>Artículos</h2>
            </header>

            <div className="flex-container">
                {currentArticles.map((item, index) => (
                    <div ref={(el) => divRefs.current[index] = el}>
                        <Link href={"/articles/" + (item.index)} target="_blank">
                            <h3>{item.title}</h3>
                            <h4>Introducción</h4>
                            <p>{item.introduction}</p>
                            <button>Leer artículo</button>
                            <br /><br /><br />
                        </Link>
                    </div>
                ))}
            </div>
            <p className="articlesBrowserInfo">{currentIndex + 1 === articles.length
                ? currentIndex + 1 + ' de ' + articles.length
                : currentIndex + 1 + '-' + Math.min(currentIndex + ITEMS_PER_PAGE, articles.length) + ' de ' + articles.length
            }
            </p>
            <div className="pagination-buttons">
                <button onClick={goToFirst} disabled={currentIndex === 0}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" /></svg></button>
                <button onClick={goToPrev} disabled={currentIndex === 0}><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg></button>
                <button onClick={goToNext} disabled={currentIndex >= articles.length - ITEMS_PER_PAGE}><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg></button>
                <button onClick={goToLast} disabled={currentIndex >= articles.length - ITEMS_PER_PAGE}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z" /></svg></button>
            </div>            
        </>
    );
}

export default Articles;