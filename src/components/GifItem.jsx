import React from 'react'

export function GifItem({title,url}) {
    return (
        <div className='card'>
            <div>{title}</div>
            <img src={url} alt={title} />
        </div>
    )
}
