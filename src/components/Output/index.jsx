import { Container, Card, CardContent, Typography } from '@material-ui/core'
import Graph from '../Graph'

const ContainerStyle = {
  maxWidt: '100%',
  padding: '2rem 0',
  display: 'flex',
  justifyContent: 'center'
}

const CardStyle = {
  padding: '20px 40px',
}


function Output({data}) {
  return (
    <Container style={ContainerStyle}>
      <Card style={CardStyle}>
          {data.typeName && (
            <>             
              <Typography style={{ textAlign: 'center' }}>
                {data.typeName}
              </Typography>
              <Graph input={data.originalValue} points={data.convertedPoints} />
            </>
          )}
          {!data.typeName && (
            <Typography style={{ textAlign: 'center' }}>
              Selecione o tipo de código de linha e o valor para realizar a conversão.
            </Typography>
          )}
      </Card>
    </Container>
  )
}

export default Output;
