import React from 'react'

interface courseParts {
    name: string,
    exerciseCount: number
}

interface Props {
    courseParts: Array<courseParts>
}

const Content: React.FC<Props> = ({courseParts}) => {
    return (
        <>
          {courseParts.map(course => 
              <p key={course.name}>{course.name}: {course.exerciseCount}</p>
          )}  
        </>
    )
}

export default Content
