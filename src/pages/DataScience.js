import React from 'react';

const DataScience = () => {
    const cards = [
        {
            id: 1,
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
            title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
            date: 'Oct 01, 2024',
            mentor: 'Isha Sharma',
            readtime: '6 Min Read',
        },
        {
            id: 2,
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp',
            title: '12 Real-World Data Science Examples: Power Of Data Science',
            date: 'Sep 20, 2024',
            mentor: 'Lukesh S',
            readtime: '7 Min Read',
        },
        {
            id: 3,
            image:'https://www.guvi.in/blog/wp-content/uploads/2024/07/Top-15-Data-Science-Projects-for-Final-Year-1.png',
            title: 'Top 15 Data Science Projects for Final Year [With Source Code]',
            date: 'Oct 01, 2024',
            mentor: 'Lukesh S',
            readtime: '6 Min Read',
        },
        {
            id: 4,
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png',
            title: 'Can A Commerce Student Do Data Science?',
            date: 'Oct 01, 2024',
            mentor: 'Saakshi Priyadarshini',
            readtime: '3 Min Read',
        },
        {
            id: 5,
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png',
            title: 'Roles and Responsibilities of a Data Scientist',
            date: 'Oct 01, 2024',
            mentor: 'Jaishree Tomar',
            readtime: '6 Min Read',
        },
        {
            id: 6,
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp',
            title: 'Top Product-Based Companies for Data Scientists in 2024',
            date: 'Sep 20, 2024',
            mentor: 'Jaishree Tomar',
            readtime: '4 Min Read',
        },
        {
            id: 7,
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/08/Everything-about-Data-Science-Salary-in-India.png',
            title: 'Everything about Data Scientist Salary in India | 2024',
            date: 'Sep 20, 2024',
            mentor: 'Srinithi Sankar',
            readtime: '5 Min Read',
        },
        {
            id: 8,
            image:'https://www.guvi.in/blog/wp-content/uploads/2024/07/4-Types-of-Data-Nominal-Ordinal-Discrete-Continous.png',
            title: '4 Types of Data: Nominal, Ordinal, Discrete, Continuous',
            date: 'Sep 21, 2024',
            mentor: 'Jaishree Tomar',
            readtime: '6 Min Read',
        }
        
        
    ];

    return (
        <div className="container">
            <h1>Data Science</h1>
            <div className="card-container">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <div className="image">
                            <img style={{ width: '100%', height: '170px', objectFit:'fit-cover' }} src={card.image} alt={card.title}/>
                        </div>
                            <div className='card-title'>{card.title}</div>
                            <div className='mentorname'>By : {card.mentor}</div>
                        <div>
                        <div className='create-date'>{card.date}</div>
                        <div className='readtime'>{card.readtime}</div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataScience;