// import './index.css'
import { Container, TextField, Select, Button, Card, MenuItem, InputLabel, FormControl } from '@material-ui/core'
import { useState } from 'react'

const ContainerStyle = {
  margin: '3rem',
  padding: '2rem',
  display: 'flex',
  justifyContent: 'center'
}

const CardStyle = {
  width: '500px',
  padding: '0 40px 40px'
}

const InputStyle = {
  margin: '15px',
  width: '300px'
}

const ButtonStyle = {
  margin: '0 15px',
}

// NRZ-I, NRZ-L, AMI, Pseudoternário, Manchester, Mancherter Diferencial

function Input({submit, options}) {
  const [data, setData] = useState('')
  const [type, setType] = useState('')
 
  const handleBinaryInput = (e) => {
    const lastChar = e.target.value[e.target.value.length - 1]
    if (lastChar === '0' || lastChar === '1') setData(e.target.value)
  }
  return (
    <Container style={ContainerStyle}>
      <Card style={CardStyle}>
        <h1>Conversor de códigos de linha</h1>
        <h3>Preencha as informações abaixo e clique no botão 'Converter' para utilizar o conversor.</h3>
        <FormControl>
            <InputLabel id='oi' style={{marginLeft: '15px'}}>Selecione o tipo de código de linha</InputLabel>
            <Select
              labelId='oi'
              id="select"
              value={type}
              style={InputStyle}
              onChange={(event) => setType(event.target.value)}
            >
              <MenuItem value="" key='a'>
                <em>None</em>
              </MenuItem>
              {
                options.map((option, idx) => (
                  <MenuItem value={option} key={idx}>{option}</MenuItem>
                ))
              }
            </Select>
          <TextField value={data} onChange={handleBinaryInput} style={InputStyle} label="Sinal de entrada" /><br/>
          <div style={{ backgroundColor: 'red'}}>
          </div>
          <Button style={ButtonStyle} variant='outlined' onClick={() => submit({data, type})}>
            Converter
          </Button>
        </FormControl>
      </Card>
    </Container>
  )
}

export default Input;
