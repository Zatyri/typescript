import React from 'react'
import {CoursePart} from '../index';

interface Props {
    course: CoursePart;
}

const Part: React.FC<Props>= ( {course} ) => {  
    const assetNever = (value: never):never => {
        throw new Error(
            `Unhandled course part: ${JSON.stringify(value)}`
        );
    };

    switch(course.name){
    case 'Fundamentals':
        return (
            <>
                <h3>{course.name}</h3>
                <p>exercises: {course.exerciseCount}</p> 
                <p>description: {course.description}</p>                         
            </>
        )                    
    case 'Using props to pass data':
        return (
            <>
                <h3>{course.name}</h3>
                <p>exercises: {course.exerciseCount}</p>                        
            </>
        )         
    case 'Deeper type usage':
        return (
            <>
                <h3>{course.name}</h3>
                <p>exercises: {course.exerciseCount}</p>
                <p>description: {course.description}</p>                    
            </>
        )
    case 'my own course':
        return (
            <>
                <h3>{course.name}</h3>
                <p>exercises: {course.exerciseCount}</p> 
                <p>description: {course.description}</p>                         
            </>
        ) 
    default:
        return assetNever(course);      
        
    }
            
}

export default Part
