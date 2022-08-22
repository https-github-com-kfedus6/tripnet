import React from 'react'
import AboutUsEdit from './AboutUsEdit'
import BlogEdit from './BlogEdit'
import FAQEdit from './FAQEdit'
import FlightsEdit from './FlightsEdit'
import NovetlyEdit from './NovetlyEdit'

const AdminMain = () => {
  return (
    <div className="admin__panel__main">
      <AboutUsEdit/>
      <BlogEdit/>
      <FAQEdit/>
      <NovetlyEdit/>
      <FlightsEdit/>
    </div>
  )
}

export default AdminMain