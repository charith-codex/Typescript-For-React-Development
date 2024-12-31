import './App.css';
import { Person, Countries } from './Person';
import { UserProvider } from './UserContextProvider';

function App() {
  return (
    <UserProvider>
      <Person name={'Alex'} age={28} isMarried={false} country={Countries.GERMANY} />
      <Person name={'Jane'} age={26} isMarried={false} country={Countries.SRI_LANKA} />
    </UserProvider>
  );
}

export default App;
