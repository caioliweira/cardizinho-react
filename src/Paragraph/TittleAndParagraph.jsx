import React from "react";
import './TittleAndParagraph.scss'

const TittleAndParagraph = ({tittle, paragraph}) => {
     return (<>
          <div className="TittleAndParagraph">
               <h1>{tittle}</h1>
               <p>{paragraph}</p>
          </div></>)
}
export default TittleAndParagraph