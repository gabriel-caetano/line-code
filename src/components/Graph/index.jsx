import { Container, Card } from '@material-ui/core'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'


const ContainerStyle = {
  margin: '0 3rem',
  padding: '2rem',
  display: 'flex',
  justifyContent: 'center'
}

const CardStyle = {
  width: '1000px',
  height: '500px',
  padding: '0 40px 40px'
}




function Graph({data}) {
  // const length = data.originalValue.length + 3
  console.log(data.originalPoints);

  return (
    <Container style={ContainerStyle}>
      <Card style={CardStyle}>
        <h1>Conversão direta dos bits</h1>
        <VictoryChart theme={VictoryTheme.grayscale} domain={{ y: [-3, 3] }} style={{ width: '1500px', height: '500px !important'}}>
          <VictoryLine
            data={data.originalPoints ? data.originalPoints : []}
          />
        </VictoryChart>
        Gráfico vai aparecer aqui
      </Card>
    </Container>
  )
}

export default Graph;
