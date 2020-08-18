import React from "react";

export const DomainsListItem = ({domain}) => {
  return(
    <div className={"list-item"}>
      <span>{domain.domain}</span>
      <ul>
        {console.log(domain)}
        {Object.keys(domain).map((obj,index)=>{
          return(
            <li key={index}>{obj}: {domain[obj]}</li>
          )
        })}
      </ul>
    </div>
  )
}
