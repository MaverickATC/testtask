import React from "react";
import {DomainsListItem} from "./DomainsListItem";

export const DomainsList = ({domains}) => {
  return(
    <div className={"list"}>
      {console.log(domains)}
      {domains && domains.map((domain, index)=>{
        return(
          <DomainsListItem domain={domain} key={index} />        )
      })}
    </div>
  )
}
