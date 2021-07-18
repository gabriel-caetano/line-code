import { VictoryLine, VictoryTheme, VictoryAxis, VictoryLabel } from 'victory'
import { Container } from '@material-ui/core'

const ContainerStyle = {
  height: '220px',
  maxWidth: '100%',
  overflow: 'auto',
}

const SvgStyle = {
  border: '1px solid black',
  paddingRight: '50px'
}


function Graph({input, points}) {
  const length = input.length ? input.length + 2 : 6
  const width = length*20 + 120 
  const header = input.split('').map((char, idx) => 
    ({idx: char})
  )

  const tick = [0, 1, 2, 3, 4, 5]
  for (let i = 6; i < input.length; i++) {
    tick.push(i)
  }
  if (!tick.length) tick.push()

  return (
    <Container style={ContainerStyle}>
      <svg width={width-100} height={200} style={SvgStyle}>
        <VictoryAxis crossAxis
          width={width}
          height={200}
          tickValues={tick}
          domain={[-1, length+2]}
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
          offsetX={67}
          standalone={false}
        />
        <VictoryLine
          standalone={false}
          width={width}
          height={200}
          domain={{x: [-1, length+2], y:[-3, 3]}}
          style={{
            data: { stroke: "black" },
          }}
          data={ points.length ? points : [{ x: 0, y: 0 }] }
        />
      </svg>
    </Container>
  )
}

export default Graph;
