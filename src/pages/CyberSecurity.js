import React from 'react';

const CyberSecurity = () => {
    const cards = [
        {
            id: 1,
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png',
            title: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
            date: 'Sep 27, 2024',
            mentor: 'Tushar Vinocha',
            readtime: '5 Min Read',
        },
        {
            id: 2,
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
            title: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
            date: 'Sep 27, 2024',
            mentor: 'Jaishree Tomar',
            readtime: '4 Min Read',
        },
        {
            id: 3,
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/03/real-time-Cybersecurity-projects-2.png',
            title: 'Top 25 Real-Time Cybersecurity Project Ideas!',
            date: 'Sep 27, 2024',
            mentor: 'Archana',
            readtime: '1 Min Read',
        },
        {
            id: 4,
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp',
            title: 'What Is Hacking? Types of Hacking & More',
            date: 'Sep 27, 2024',
            mentor: 'Meghana D',
            readtime: '6 Min Read',
        },
        {
            id: 5,
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/11/Blue-Purple-Futuristic-Virus-Hacks-Youtube-Thumbnail.png',
            title: 'Top 10 Ethical Hacking Books for Beginner to Advanced',
            date: 'Sep 27, 2024',
            mentor: 'Tushar Vinocha',
            readtime: '6 Min Read',
        },
        {
            id: 6,
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png',
            title: '8 Different Types of Cybersecurity and Threats Involved',
            date: 'Sep 27, 2024',
            mentor: 'Tushar Vinocha',
            readtime: '4 Min Read',
        },
        {
            id: 7,
            image:'https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-945x495.png',
            title: 'The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!',
            date: 'Sep 27, 2024',
            mentor: 'Tushar Vinocha',
            readtime: '3 Min Read',
        },
        {
            id: 8,
            image:'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif',
            title: 'What is Cybersecurity? Importance and its uses & the growing challenges in 2024!',
            date: 'Sep 27, 2024',
            mentor: 'Tushar Vinocha',
            readtime: '4 Min Read',
        }
        
    ];

    return (
        <div className="container">
            <h1>Cyber Security</h1>
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

export default CyberSecurity;