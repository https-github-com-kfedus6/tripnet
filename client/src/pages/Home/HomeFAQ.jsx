import React, { useEffect, useState } from 'react'

const HomeFAQ = ({FAQ}) => {
    function createMarkup(text) { return {__html: text}; };
  return (
    <div className="FAQ__main">
        <div className="FAQ__name">
            {FAQ.name}
        </div>
        <div dangerouslySetInnerHTML={createMarkup(FAQ.description)}></div>
    </div>
  )
}

export default HomeFAQ