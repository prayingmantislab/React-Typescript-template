import { useEffect, useState } from 'react';
import breakify from './helper/breakify';
import BreakingLogo from './components/BreakingLogo';
const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [first, setFirst] = useState(['', '', '']);
  const [last, setLast] = useState(['', '', '']);

  useEffect(() => {
    setFirst(breakify(firstName));
  }, [firstName]);

  useEffect(() => {
    setLast(breakify(lastName));
  }, [lastName]);
  return (
    <div className='app'>
      <div className='content'>
        <BreakingLogo result={first} />
        <BreakingLogo result={last} />
        <div className='row'>
          <div className='col'>
            <label> First Name</label>
            <input
              onChange={(ev) => setFirstName(ev.target.value)}
              value={firstName}
            />
          </div>
          <div className='col'>
            <label>Last Name</label>
            <input
              onChange={(ev) => setLastName(ev.target.value)}
              value={lastName}
            />
          </div>
        </div>
        <button>Breakify</button>
      </div>
    </div>
  );
};
export default App;
