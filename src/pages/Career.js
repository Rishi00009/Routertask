import React from 'react';

const Career = () => {
    const jobOpenings = [
        {
            id: 1,
            title: 'Software Engineer',
            description: 'We are seeking a skilled software engineer to join our team.',
            location: 'New York, NY',
            type: 'Full-time'
        },
        {
            id: 2,
            title: 'Data Scientist',
            description: 'We are looking for a data scientist to help us analyze and interpret complex data.',
            location: 'San Francisco, CA',
            type: 'Full-time'
        },
        {
            id: 3,
            title: 'Product Manager',
            description: 'We are seeking a product manager to lead the development of our new product.',
            location: 'Chicago, IL',
            type: 'Full-time'
        },
        {
            id: 4,
            title: 'UX Designer',
            description: 'We are looking for a UX designer to help us create user-centered designs.',
            location: 'Austin, TX',
            type: 'Full-time'
        },
        {
            id: 5,
            title: 'DevOps Engineer',
            description: 'We are seeking a DevOps engineer to help us improve our deployment process.',
            location: 'Seattle, WA',
            type: 'Full-time'
        },
        {
            id: 6,
            title: 'Marketing Manager',
            description: 'We are looking for a marketing manager to help us develop our marketing strategy.',
            location: 'Boston, MA',
            type: 'Full-time'
        },
        {
            id: 7,
            title: 'Sales Representative',
            description: 'We are seeking a sales representative to help us grow our sales team.',
            location: 'Los Angeles, CA',
            type: 'Full-time'
        },
        {
            id: 8,
            title: 'Customer Support Specialist',
            description: 'We are looking for a customer support specialist to help us provide excellent customer service.',
            location: 'Denver, CO',
            type: 'Full-time'
        },
        {
            id: 9,
            title: 'IT Project Manager',
            description: 'We are seeking an IT project manager to help us manage our IT projects.',
            location: 'Washington, D.C.',
            type: 'Full-time'
        },
        {
            id: 10,
            title: 'Business Analyst',
            description: 'We are looking for a business analyst to help us analyze and improve our business processes.',
            location: 'Miami, FL',
            type: 'Full-time'
        }
    ];

    return (
        <div className="container">
            <h1>Career Opportunities</h1>
            <div className="job-openings">
                {jobOpenings.map((job) => (
                    <div key={job.id} className="job-opening">
                        <h2>{job.title}</h2>
                        <p>Expectation : {job.description}</p>
                        <p>Location: {job.location}</p>
                        <p>Type: {job.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Career;