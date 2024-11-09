import React from 'react';

const FullStackDeveloper = () => {
    const cards = [
        {
            id: 1,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/project_ideas_for_robotic_applications-1.webp',
            title: '10 Best HTML and CSS Project Ideas for Beginners',
            date: '01 Oct, 2024',
            mentor: 'Isha Sharma',
            readtime: '3 min read',
        },
        {
            id: 2,
            image:'https://www.guvi.in/blog/wp-content/uploads/2024/04/10-Best-React-Project-Ideas-for-Developers-with-Source-Code.png',
            title: '10 Best React Project Ideas for Developers [with Source Code]',
            date: '10 Oct, 2024',
            mentor: 'Isha Sharma',
            readtime: '5 min read',
        },
        {
            id: 3,
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg',
            title: 'Best Full-Stack Development Project Ideas in 2024',
            date: '17 Sep, 2024',
            mentor: 'Isha Sharma',
            readtime: '4 min read',
        },
        {
            id: 4,
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp',
            title: 'How Long Would It Take to Be a Full Stack Developer?',
            date: '17 Sep, 2024',
            mentor: 'Meghana D',
            readtime: '3 min read',
        },
        {
            id: 5,
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png',
            title: '10 Best Database Management Systems For Software Developers',
            date: '17 Sep, 2024',
            mentor: 'Isha Sharma',
            readtime: '3 min read',
        },
        {
            id: 6,
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg',
            title: 'Top 10 Full-Stack Developer Frameworks in 2024.',
            date: '17 Sep, 2024',
            mentor: 'Isha Sharma',
            readtime: '5 min read',
        },
        {
            id: 7,
            image:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Steps-to-Create-a-Simple-Hello-World-Page-Using-HTML.webp',
            title: 'How to Create a Simple “Hello World” Page Using HTML?',
            date: '17 Sep, 2024',
            mentor: 'Meghana D',
            readtime: '4 min read',
        },
        {
            id: 8,
            image:'https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png',
            title: 'How does Apache work? A detailed introduction to Apache',
            date: '17 Sep, 2024',
            mentor: 'Tushar Vinocha',
            readtime: '5 min read',
        },
        {
            id: 9,
            image:'https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png',
            title: 'Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 [UPDATED]',
            date: '17 Sep, 2024',
            mentor: 'Archana',
            readtime: '6 min read',
        }
        
    ];

    return (
        <div className="container">
            <h1>Full Stack Developer Course</h1>
            <div className="card-container">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <div className="image">
                            <img style={{ width: '100%', height: '170px', objectFit:'fit-cover' }} src={card.image} alt={card.title}/>
                        </div>
                            <p className='card-title'>{card.title}</p>
                            <p className='mentorname'>By : {card.mentor}</p>
                        <div>
                            <p className='create-date'>{card.date}</p>
                            <p className='readtime'>{card.readtime}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FullStackDeveloper;