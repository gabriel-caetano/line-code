import { useState } from 'react';
import { Container } from '@material-ui/core';
import Input from './components/Input';
import Output from './components/Output';
import conversor from './utils/conversor';

const AppStyle = {
  backgroundColor: '#CCC',
  maxWidth: '100vw',
  minHeight: '100vh',
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
  const [encodedData, setEncodedData] = useState({
    originalValue: '',
    originalPoints: [],
    convertedPoints: [],
    typeName: null,
  });

  const updateData = (data) => {
    const newData = conversor(data, lineCodeTypes);
    setEncodedData(newData);
  };
  return (
    <Container style={AppStyle}>
      <Input submit={updateData} options={lineCodeTypes} />
      <Output data={encodedData} />
    </Container>
  );
}

export default App;
