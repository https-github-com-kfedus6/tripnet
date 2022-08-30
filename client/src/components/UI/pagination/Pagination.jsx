import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Pagination = ({ flights, pagesArray, moreFlights, changePage, limit, page }) => {
    const { t } = useTranslation()

    return (
        <div className='pages'>
            <div className={page === pagesArray.length ? 'page-none' : 'page-more'}>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success" onClick={moreFlights}>
                        {t('flight.pagination')}
                    </Button>
                </Stack>
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