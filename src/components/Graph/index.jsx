import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from 'victory'
import { Container } from '@material-ui/core'

const ContainerStyle = {
  height: '220px',
  maxWidth: '100%',
  overflow: 'scroll'
}


function Graph({input, points}) {
  const length = input.length + 3
  console.log(points);
  const width = length*20

  const tick = []
  for (let i = 0; i < input.length; i++) {
    tick.push(i)
  }

  return (
    <Container style={ContainerStyle}>
      <svg width={width} height={200}>
        <VictoryAxis crossAxis
          width={width+120}
          height={200}
          tickValues={tick}
          domain={[-3, length+1]}
          theme={VictoryTheme.material}
          offsetY={100}
          standalone={false}
          />
        <VictoryAxis dependentAxis crossAxis
          width={width}
          height={200}
          tickValues={[-2,-1,0,1,2]}
          domain={[-3, 3]}
          theme={VictoryTheme.material}
          offsetX={100}
          standalone={false}
        />
        <VictoryLine
          width={width}
          height={200}
          padding={0}
          // style={{
          //   data: { stroke: "#c43a31" },
          //   parent: { border: "1px solid #ccc"}
          // }}
          data={points}
        />
      </svg>
    </Container>
  )
}

export default Graph;
