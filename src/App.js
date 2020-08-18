import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {DomainsList} from "./components/DomainsList";
import {DomainsListItem} from "./components/DomainsListItem";

function App() {
  const [domains, setDomains] = useState([]);
  const {register, handleSubmit} = useForm();
  const onSubmit = async data => {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?limit=50&domain=${data.search}`
      );
      setDomains(response.data.domains);

    } catch (e) {
      alert(e);
    }
  }
  return (
    <div className="App">
      <form
        className={"form"}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Search"
          name="search"
          ref={register({required: true})}
        />
        <button type="submit">Search</button>
      </form>
      <DomainsList domains={domains}/>
    </div>
  );
}

export default App;
