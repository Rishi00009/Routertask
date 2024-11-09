import React from 'react';
import FullStackDeveloper from './FullStack';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';

const All = () => {
    return (
        <div >
            <div className="all-pages">All Pages</div>
            <div >
                <FullStackDeveloper />
                <DataScience />
                <CyberSecurity />
                <Career />
            </div>
        </div>
    );
};

export default All;