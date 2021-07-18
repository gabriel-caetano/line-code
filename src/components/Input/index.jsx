// import './index.css'
import { Container, TextField, Select, Button, Card, MenuItem, InputLabel, FormControl, CardContent, Typography } from '@material-ui/core'
import { useState } from 'react'

const ContainerStyle = {
  padding: '1rem 0 0',
  display: 'flex',
  justifyContent: 'center'
}

const CardStyle = {
  width: '500px',
  padding: '0 40px 0'
}

const InputStyle = {
  width: '300px',
  verticalAlign: 'text-bottom'
}

const ButtonStyle = {
  width: '150px',
  margin: '0 0 0 15px',
  verticalAlign: 'text-bottom'
}

const RowStyle = {
  verticalAlign: 'text-bottom'
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
        <CardContent>
          <Typography style={{ fontSize: 16 }} color="textPrimary" gutterBottom>
            Conversor de códigos de linha
          </Typography>
          <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
            Preencha as informações abaixo e clique no botão 'Converter' para utilizar o conversor.
          </Typography>
        
          <FormControl>
              <InputLabel id='oi'>Selecione o tipo de código de linha</InputLabel>
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
            <row style={RowStyle}>
              <TextField value={data} onChange={handleBinaryInput} style={InputStyle} label="Sinal de entrada" />
              <Button style={ButtonStyle} variant='outlined' onClick={() => submit({data, type})}>
                Converter
              </Button>
            </row>
          </FormControl>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Input;
