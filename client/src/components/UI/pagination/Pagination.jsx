import React from 'react'

const Pagination = ({ flights, pagesArray, moreFlights, changePage, limit, page }) => {

    return (
        <div className='pages'>
            <div className={flights.count <= limit ? 'page-none' : 'page-more'}>
                <button onClick={moreFlights}>Подивитися ще</button>
            </div>
            <div className='page-wrapper'>
                {pagesArray.map(p => {
                    return (
                        <button
                            onClick={() => changePage(p)}
                            key={p}
                            className={page === p ? 'page page-current' : 'page'}
                        >{p}</button>
                    )
                })}
            </div>
        </div >
    )
}

export default Pagination;