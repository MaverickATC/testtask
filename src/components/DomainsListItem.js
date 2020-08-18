import React from "react";

export const DomainsListItem = ({domain}) => {
  return(
    <div className={"list-item"}>
      {console.log(domain)}
      <span>{domain.domain}</span>
      <ul>
        <li>create_date: {domain.create_date}</li>
        <li>update_date: {domain.update_date}</li>
        <li>country: {domain.country}</li>
        <li>isDead: {domain.isDead}</li>
        <li>A: {domain.A}</li>
        <li>NS: {domain.NS}</li>
        <li>CNAME: {domain.CNAME}</li>
        <li>TXT: {domain.TXT}</li>
      </ul>
    </div>
  )
}
