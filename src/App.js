import { useState } from 'react';
import { Container } from '@material-ui/core';
import Input from './components/Input';
import Graph from './components/Graph';
import conversor from './utils/conversor';

const AppStyle = {
  backgroundColor: '#CCC',
  maxWidth: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
};

const lineCodeTypes = Object.freeze([
  'NRZ-I',
  'NRZ-L',
  'AMI',
  'Pseudoternário',
  'Manchester',
  'Mancherter Diferencial',
]);

function App() {
  const [encodedData, setEncodedData] = useState({});

  const updateData = (data) => {
    const newData = conversor(data, lineCodeTypes);
    setEncodedData(newData);
  };
  return (
    <Container style={AppStyle}>
      <header>
        <Input submit={updateData} options={lineCodeTypes} />
        <Graph data={encodedData} />
      </header>
    </Container>
  );
}

export default App;
