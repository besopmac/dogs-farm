import { useState } from 'react';
import Pet from './Pet';

const ANIMALS = ['bird', 'cat', 'dog', 'fish', 'giraffe']

const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
 
  // `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`

  return (
    <div>
      <form>
        <label htmlFor="location">
          <input
            id="location"
            value={location}
          /> 
        </label>

        <label htmlFor="animal">
          <select
            id="animal"
            value={animal}
          >
            <option />
            {
              ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))
            }
          </select>
        </label>

        <label htmlFor="breed">
          <select id="breed">
            <option />
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams