import React from 'react'
import { FaBus } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'

const FlightScheduleBusList = () => {

    return (
        {/* <div className='block-schedule'>
            <div className='schedule-with-to'>
                <span>Розклад автобусів {flight.startPosition} - {flight.finishPosition}</span>
                {is_admin
                    ?
                    <span>Розклад дійсний з
                        <input type="text" placeholder=""
                          onChange={(e) => setScheduleWith(e.target.value)}  
                        />
                        до
                        <input type="text" placeholder=""
                         onChange={(e) => setScheduleTo(e.target.value)} 
                        />
                        <button onClick={changeSchedule}>Обновити</button>
                    </span>
                    :
                    <span>Розклад дійсний з <strong>""</strong> до <strong>""</strong>.</span>
                }
            </div>
            <div>
                <table className='table-date'>
                    <thead>
                        <tr>
                            <th>Час</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>
                            <small>{flight.timeFlight}</small>
                            <br />
                            <strong>{flight.startTime}</strong>
                            <BsArrowRight />
                            <strong>{flight.finishTime}</strong>
                        </td>
                        <td><FaBus /> <GrClose /></td>
                    </tbody>
                </table>
            </div>
        </div > */}
    )
}

export default FlightScheduleBusList;