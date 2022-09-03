import React from 'react'
import AboutUsEdit from './AboutUsEdit'
import BlogEdit from './BlogEdit'
import FAQEdit from './FAQEdit'
import FlightsEdit from './FlightsEdit'
import InfoCompanyEdit from './InfoCompanyEdit'
import NovetlyEdit from './NovetlyEdit'
import OrderNavigate from './OrderNavigate'
import ResponceEdit from './ResponceEdit'

const AdminMain = () => {
    return (
        <div className="admin__panel__main">
            <InfoCompanyEdit />
            <AboutUsEdit />
            <BlogEdit />
            <FAQEdit />
            <NovetlyEdit />
            <FlightsEdit />
            <ResponceEdit/>
            <OrderNavigate />
        </div>
    )
}

export default AdminMain