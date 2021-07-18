// import './index.css'
import { Container, Card } from '@material-ui/core'

const ContainerStyle = {
  margin: '0 3rem',
  padding: '2rem',
  display: 'flex',
  justifyContent: 'center'
}

const CardStyle = {
  width: '500px',
}




function Graph({data}) {
  return (
    <Container style={ContainerStyle}>
      <Card style={CardStyle}>
        <p>Sinal: { data.originalPoints ? data.originalPoints : 'vazio' }</p>
        Gráfico vai aparecer aqui
      </Card>
    </Container>
  )
}

export default Graph;
