import React from 'react'
import AboutUsEdit from './AboutUsEdit'
import BlogEdit from './BlogEdit'

const AdminMain = () => {
  return (
    <div className="admin__panel__main">
      <AboutUsEdit/>
      <BlogEdit/>
    </div>
  )
}

export default AdminMain