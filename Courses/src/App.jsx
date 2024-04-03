import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Course from './Course';
import { courses } from './Data';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header handleChange={handleChange} searchTerm={searchTerm} />
            <div className="cards-container">
                {filteredCourses.map((course) => (
                    <Course key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}

export default App;
