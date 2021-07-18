import { Container, Card, CardContent, Typography } from '@material-ui/core'
import Graph from '../Graph'


const ContainerStyle = {
  maxWidt: '100%',
  padding: '2rem',
  display: 'flex',
  justifyContent: 'center'
}

const CardStyle = {
  padding: '0 40px 40px'
}




function Output({data}) {
  return (
    <Container style={ContainerStyle}>
      <Card style={CardStyle}>
        <CardContent>
          <Typography style={{ textAlign: 'center' }}>
            Conversão direta dos bits
          </Typography>
          <Graph input={data.originalValue} points={data.originalPoints} />
          <Typography style={{ textAlign: 'center' }}>
            Conversão direta dos bits
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Output;
