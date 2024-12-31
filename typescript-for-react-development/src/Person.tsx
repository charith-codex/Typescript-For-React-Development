import { useContext, useState } from 'react';
import { UserContext } from './UserContextProvider';

export interface Person {
  name: string;
  age: number;
  isMarried: boolean;
  country?: Countries;
}

export enum Countries {
  USA = 'Usa',
  SRI_LANKA = 'Sri Lanka',
  GERMANY = 'Germany',
}

export const Person = (props: Person) => {
  // const { users, updateUser, deleteUser } = useContext(UserContext);

  const [isShow, setIsShow] = useState(false);
  const [personBio, setPersonBio] = useState<string | null>(null);

  const toggleInfo = () => {
    return setIsShow((prev) => !prev);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setPersonBio(event.target.value);
  };

  //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //   };

  return (
    <div>
      {isShow && (
        <>
          <p>name: {props.name}</p>
          <p>age: {props.age}</p>
          <p>Married : {props.isMarried ? 'married' : 'single'}</p>
          <div>
            {/* <p>{personBio === null ? 'No Bio' : personBio}</p> */}
            <p>{!personBio ? 'No Bio' : personBio}</p>
            <input onChange={handleChange} />
          </div>
          <p>Country: {props.country}</p>
        </>
      )}
      <button onClick={toggleInfo}>show info</button>
    </div>
  );
};
