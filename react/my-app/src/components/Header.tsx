import React from 'react'

interface Props {
    header: string;
}

const Header: React.FC<Props> = ({header}) => {
    return (
        <>
            <h1>{header}</h1>
        </>
    )
}

export default Header
