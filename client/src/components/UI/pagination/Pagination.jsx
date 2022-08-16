import React from 'react'

const Pagination = ({ flights, pagesArray, moreFlights, changePage, limit, page }) => {


    if (Array.isArray(flights) === false)
        return (
            <div className='pages'>
                <div className={flights.count <= limit ? 'page-none' : 'page-more'}>
                    <button onClick={moreFlights}>Подивитися ще</button>
                </div>
                <div className={pagesArray.length === 1 || flights.rows.length === flights.count ? 'page-wrapper-none' : 'page-wrapper'}>
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