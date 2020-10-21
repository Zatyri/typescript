import React from 'react'
import Part from './Part'
import {CoursePart} from '../index'
/*
interface courseParts {
    name: string,
    exerciseCount: number
}
*/
interface Props {
    courseParts: Array<CoursePart>
}

const Content: React.FC<Props> = ({courseParts}) => {
    return (
        <>
        {courseParts.map(course => <Part key={course.name} course={course}/>)}    
        </>
    )
}

export default Content
