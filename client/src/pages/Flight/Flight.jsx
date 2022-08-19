import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';

import '../Flight/flight.css';

const Flight = () => {
    const { id } = useParams()

    const { flight } = useSelector(state => state.flights)

    const { fetchGetFlight } = useAction()

    useEffect(() => {
        fetchGetFlight(id)
    }, [])

    return (
        <div>Flight</div>
    )
}

export default Flight;