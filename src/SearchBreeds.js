import { useState, useEffect } from 'react';
import Pet from './Pet';

const SearchBreeds = () => {
  const [pets, setPets] = useState([]);
  
  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);

    const json = res.json();
    setPets('JSON =>', json);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="breed">
          <input id="breed" placeholder="Type a breed and click search" />
        </label>
        <button>search</button>
      </form>
    </div>
  );
}

export default SearchBreeds;