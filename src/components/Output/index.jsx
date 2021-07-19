import { Container, Card, CardContent, Typography } from '@material-ui/core'
import Graph from '../Graph'


const ContainerStyle = {
  maxWidt: '100%',
  padding: '2rem 0 2rem',
  display: 'flex',
  justifyContent: 'center'
}

const CardStyle = {
  padding: '0 40px 40px'
}




function Output({data}) {
  console.log(data);
  return (
    <Container style={ContainerStyle}>
      <Card style={CardStyle}>
        <CardContent>
          <Typography style={{ textAlign: 'center' }}>
            Conversão direta dos bits
          </Typography>
          <Graph input={data.originalValue} points={data.originalPoints} />
          {data.typeName && (
            <>
              <Typography style={{ textAlign: 'center' }}>
                Código de linha tipo {data.typeName}
              </Typography>
              <Graph input={data.originalValue} points={data.originalPoints} />
            </>)}
        </CardContent>
      </Card>
    </Container>
  )
}

export default Output;
