import React from 'react'

interface courseParts {
    name: string,
    exerciseCount: number
}

interface Props {
    courseParts: Array<courseParts>
}

const Total: React.FC<Props> = ({courseParts}) => {
    return (
        <>
            <p>Number of exercises: {courseParts.reduce((total, next) => total + next.exerciseCount, 0)}</p>
        </>
    )
}

export default Total
