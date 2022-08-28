import { t } from 'i18next'
import React from 'react';
import { useSelector } from 'react-redux'
import { useAction } from "../../hooks/useAction";
import { useEffect } from 'react';

const Responce = () => {
    const { GetResponceNovetly } = useAction()
    const { novetlyResponce } = useSelector(state => state.responce);

    useEffect(() => {
        GetResponceNovetly();
    }, [])

    console.log(novetlyResponce);
    return (
        novetlyResponce == undefined ? <div>loading...</div> :
            <div className="list__responce__main">
                <div className="responce__main">
                    <div className='responce__name'>
                        {t("home.responce")}
                    </div>
                    <div className='responce__name__author__and__description'>

                        <h5 className="responce__name__author">
                            {novetlyResponce[0].nameAuthor}
                        </h5>
                        <div className='responce__description'>
                            {novetlyResponce[0].description}
                        </div>
                    </div>

                </div>
                <div className='responce__pagination'></div>


            </div>
    )
}

export default Responce