import { VictoryLine, VictoryTheme, VictoryAxis } from 'victory'
import { Container } from '@material-ui/core'

const ContainerStyle = {
  height: '220px',
  maxWidth: '100%',
  overflow: 'scroll'
}


function Graph({input, points}) {
  const length = input.length ? input.length + 1 : 6
  console.log(points);
  const width = length*20

  const tick = [0, 1, 2, 3, 4, 5]
  for (let i = 6; i < input.length; i++) {
    tick.push(i)
  }
  if (!tick.length) tick.push()

  return (
    <Container style={ContainerStyle}>
      <svg width={width} height={200}>
        <VictoryLine
          width={width}
          height={200}
          padding={0}
          style={{
            data: { stroke: "red" },
            parent: { border: "1px solid #ccc"}
          }}
          data={ points.length ? points : [{ x: 0, y: 0 }] }
        />
        <VictoryAxis crossAxis
          width={width+120}
          height={200}
          tickValues={tick}
          domain={[-1, length+1]}
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
          offsetX={70}
          standalone={false}
        />
      </svg>
    </Container>
  )
}

export default Graph;
