import React from 'react'
import { useTranslation } from 'react-i18next'

const Pagination = ({ flights, pagesArray, moreFlights, changePage, limit, page }) => {
    const { t } = useTranslation()
    console.log(flights,pagesArray,moreFlights,changePage,limit,page);
    return (
        <div className='pages'>
            <div className={flights.count <= limit || page === pagesArray.length ? 'page-none' : 'page-more'}>
                <button onClick={moreFlights}>{t('flight.pagination')}</button>
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