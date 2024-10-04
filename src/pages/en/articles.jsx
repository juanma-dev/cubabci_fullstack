import NavEN from "@/components/NavEN";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const articles = [
    {
        title: 'The Law of Shamelessness: The Codification of Cynicism in the Regimes of Venezuela and Cuba',
        introduction: 'In the recent history of Latin America, two regimes have captured global attention not only for their policies of control and repression but also for the way they have institutionalized cynicism in the management of power. In Venezuela and Cuba, shamelessness has become a political tool, an operational principle that is not only practiced but also, in a sense, "legislated" as part of daily life. This article explores how these governments have adopted what we call "The Law of Shamelessness," turning brazenness into a tactic for political survival.',
        index: 1
    },
    {
        title: 'Hateism: The Superior Stage of Communism',
        introduction: 'Communism, as an ideology, has left an indelible mark on contemporary history, offering a vision of a classless world with apparent economic equality. However, in practice, it has shown deep flaws that, far from eliminating inequalities, often exacerbate them under a new form of state control. From these flaws arises an even darker and more destructive idea: Hateism.',
        index: 2
    },
    {
        title: "The Shamelessness of Hate: The People's Response to Oppression in Cuba and Venezuela",
        introduction: 'Cuba and Venezuela, two nations marked by decades of authoritarian regimes, have developed a system of social control based on hate and shamelessness. These tactics, aimed at dividing and oppressing the population, have created an environment where truth, justice, and decency are constantly under threat. In this context, the people face the difficult task of resisting without succumbing to complicity with the oppressive system, while also considering that only an external military intervention or a well-coordinated internal organization may bring about real change.',
        index: 3
    },
    {
        title: "The Word of God Against Tyranny and Hatred in Cuba and Venezuela",
        introduction: 'In times of oppression and dictatorship, as experienced in Cuba and Venezuela, where the government has instituted a law of shamelessness and embraced hatred, the people face profound darkness. These regimes not only seek to physically control and subjugate the population but also attempt to destroy their spirit and crush any hope for freedom. Amid such adverse circumstances, the Word of God stands as an inexhaustible source of hope, courage, and resistance.',
        index: 4
    },
    {
        title: "The Future of Cuba: A Rebirth Towards Democracy and Freedom",
        introduction: 'For decades, Cuba has been trapped under the yoke of authoritarianism, poverty, and repression. However, envisioning a future where the Caribbean island thrives as a vibrant, pluralistic, and prosperous democracy is not just a utopian aspiration but a tangible possibility. This article outlines how, under a new democratic order, the Cuban people could build a country where freedom, justice, and prosperity are the cornerstones of a new society. While the road would not be easy, Cuban ingenuity and effort, along with international support, could transform Cuba into a beacon of hope in the Caribbean.',
        index: 5
    }
];

const ITEMS_PER_PAGE = 2;

function Articles() {


    const [currentIndex, setCurrentIndex] = useState(0);
    const divRefs = useRef([]); // Refs array for the individual divs

    // Get the current page of items to display
    const currentArticles = articles.slice(currentIndex, Math.min(currentIndex + ITEMS_PER_PAGE), articles.length );

    // Handlers for the buttons
    const goToFirst = () => setCurrentIndex(0);
    const goToPrev = () => setCurrentIndex(prev => Math.max(prev - ITEMS_PER_PAGE, 0));
    const goToNext = () => setCurrentIndex(prev => Math.min(prev + ITEMS_PER_PAGE, articles.length - articles.length %  ITEMS_PER_PAGE));
    const goToLast = () => setCurrentIndex(articles.length %  ITEMS_PER_PAGE === 0 ? articles.length - ITEMS_PER_PAGE : articles.length - articles.length %  ITEMS_PER_PAGE);

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
            <NavEN parent='Articles'/>
            <header>
                <h2>Articles</h2>
            </header>

            <div className="flex-container">
                {currentArticles.map((item, index) => (
                    <div ref={(el) => divRefs.current[index] = el}>
                        <Link href={"/en/articles/" + (item.index)} target="_blank">
                            <h3>{item.title}</h3>
                            <h4>Introduction</h4>
                            <p>{item.introduction}</p>
                            <button>Read article</button>
                            <br/><br/><br/>
                        </Link>
                    </div>
                ))}
            </div>
            <p className="articlesBrowserInfo">{currentIndex + 1 === articles.length
                                                ? currentIndex + 1 + ' of ' + articles.length 
                                                : currentIndex + 1 + '-' + Math.min(currentIndex + ITEMS_PER_PAGE, articles.length) + ' of ' + articles.length
                                                }
            </p>
            <div className="pagination-buttons">
                <button onClick={goToFirst} disabled={currentIndex === 0}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"/></svg></button>
                <button onClick={goToPrev} disabled={currentIndex === 0}><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></button>
                <button onClick={goToNext} disabled={currentIndex >= articles.length - ITEMS_PER_PAGE}><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></button>
                <button onClick={goToLast} disabled={currentIndex >= articles.length - ITEMS_PER_PAGE}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg></button>
            </div>            
        </>
    );
}

export default Articles;