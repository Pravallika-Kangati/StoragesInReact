import React from 'react';

const useStateWithSessionStorage = sessionStorageKey => {
  const [value, setValue] = React.useState(
    sessionStorage.getItem(sessionStorageKey) || ''
  );

  React.useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, value);
  }, [sessionStorageKey,value]);

  return [value, setValue];
};

const SessionStorage = () => {
  const [value, setValue] = useStateWithSessionStorage(
    'myValueInSessionStorage'
  );

  const onChange = event => setValue(event.target.value);

  return (
    <div>
      <h1>Hello React with Session Storage!</h1>

      <input value={value} type="text" onChange={onChange} />

      <p>{value}</p>
    </div>
  );
};

export default SessionStorage;