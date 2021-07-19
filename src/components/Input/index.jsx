// import './index.css'
import { Container, TextField, Select, Button, Card, MenuItem, InputLabel, FormControl, CardContent, Typography, List, ListItem } from '@material-ui/core'
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
  marginBottom: '15px',
  maxWidth: '200px',
  minWidth: '80px',
  width: '100%',
  verticalAlign: 'text-bottom'
}

const ButtonStyle = {
  height: '35px',
}

const ListStyle = {
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  alignItems: 'baseline'
}

const ListItemStyle = {
  width: 'fit-content',
  margin: 0,
  padding: 0
}

function Input({submit, options}) {
  const [data, setData] = useState('')
  const [type, setType] = useState('')
 
  const handleBinaryInput = (e) => {
    const nonBinary = /[^0-1]+/g
    const binary = /[01]*/g
    const fail = nonBinary.test(e.target.value)
    const clean = e.target.value.match(binary)
    if (!fail)
      setData(clean[0])
  }
  return (
    <Container style={ContainerStyle}>
      <Card style={CardStyle}>
        <CardContent>
          <Typography style={{ fontSize: 16 }} color="textPrimary">
            Conversor de códigos de linha
          </Typography>
          <Typography style={{ fontSize: 14 }} color="textSecondary">
            Preencha as informações abaixo e clique no botão 'Converter' para utilizar o conversor.
          </Typography>
        
          <FormControl style={{ margin: 0, width: '100%'}}>
              <InputLabel id='oi'>Código de linha</InputLabel>
              <Select
                labelId='oi'
                id="select"
                value={type}
                style={InputStyle}
                onChange={(event) => {
                  setType(event.target.value)
                  if (data !== '')
                    submit({data, type: event.target.value})
                }}
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
            <List style={ListStyle}>
              <ListItem style={ListItemStyle}>
                <TextField value={data} onChange={handleBinaryInput} style={InputStyle} label="Sinal de entrada" />
              </ListItem>
              <ListItem style={ListItemStyle}>
                <Button style={ButtonStyle} variant='outlined' onClick={() => submit({data, type})}>
                  Converter
                </Button>
              </ListItem>
            </List>
          </FormControl>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Input;
