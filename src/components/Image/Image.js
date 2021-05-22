import React from 'react'

function Image({imageClassName, imageSrc}) {
    return (
            <img className={imageClassName} src={imageSrc}/>
    )
}

export default Image
