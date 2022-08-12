import React, { useEffect, useState } from 'react';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Flights = () => {

    const [name, setName] = useState('kolya')

    const { fetchGetFlights } = useAction()

    const { flights } = useTypedSelector(state => state.flights)

    useEffect(() => {
        fetchGetFlights(name)
    }, [])

    console.log(flights)

    return (
        <div>Flights</div>
    )
}

export default Flights;