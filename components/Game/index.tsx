import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

interface Iturn {
  id: number
  name: string
  value: number
  filled: boolean
  position: string
}

const trun = [
  {
    id: 1,
    name: '',
    value: 0,
    filled: false,
    position: 'A1',
  },
  {
    id: 2,
    name: '',
    value: 0,
    filled: false,
    position: 'A2',
  },
  {
    id: 3,
    name: '',
    value: 0,
    filled: false,
    position: 'A3',
  },
  {
    id: 4,
    name: '',
    value: 0,
    filled: false,
    position: 'B1',
  },
  {
    id: 5,
    name: '',
    value: 0,
    filled: false,
    position: 'B2',
  },
  {
    id: 6,
    name: '',
    value: 0,
    filled: false,
    position: 'B3',
  },
  {
    id: 7,
    name: '',
    value: 0,
    filled: false,
    position: 'C1',
  },
  {
    id: 8,
    name: '',
    value: 0,
    filled: false,
    position: 'C2',
  },
  {
    id: 9,
    name: '',
    value: 0,
    filled: false,
    position: 'C3',
  },
]

const Game: React.FC = () => {
  const [symbol, setSymbol] = useState([])

  const start = (text: string) => {
    console.log(text)
  }

  const play = (prop: string) => {
    const objIndex = trun.findIndex((obj) => obj.position === prop && obj.filled === false)

    if (objIndex !== -1) {
      trun[objIndex].name = 'O'
      trun[objIndex].value = 3
      trun[objIndex].filled = true
      console.log(trun[objIndex])
      computerTurn()
    }
  }

  const computerTurn = () => {
    const RowH1 = trun[0].value + trun[1].value + trun[2].value
    const RowH2 = trun[3].value + trun[4].value + trun[5].value
    const RowH3 = trun[6].value + trun[7].value + trun[8].value

    const RowV1 = trun[0].value + trun[3].value + trun[6].value

    //first Check
    if (RowH1 === 6) {
      console.log('h1')
      for (let i = 0; i < Row1.length; i++) {
        if (trun[i].filled === false) {
          trun[i].name = 'X'
          trun[i].value = 3
          trun[i].filled = true
          console.log(trun[i])
        }
      }
    }
    if (RowH2 === 6) {
      console.log('h2')
      for (let i = 3; i <= 5; i++) {
        if (trun[i].filled === false) {
          trun[i].name = 'X'
          trun[i].value = 3
          trun[i].filled = true
          console.log(trun[i])
        }
      }
    }
    if (RowV1 === 6) {
      for (let i = 0; i <= 6; i = i + 3) {
        console.log(i)
        if (trun[i].filled === false) {
          trun[i].name = 'X'
          trun[i].value = 3
          trun[i].filled = true
          console.log(trun[i])
        }
      }
    }
  }

  return (
    <Container>
      <Box py={5} display="flex" justifyContent="center">
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            start('you')
          }}
        >
          You First = x
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            start('computer')
          }}
        >
          Computer First = o
        </Button>
      </Box>
      <Box>
        <Box display="flex" justifyContent="center">
          <Link
            onClick={() => {
              play('A1')
            }}
            href="#"
            component="button"
          >
            <Box
              border={1}
              width={100}
              height={100}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography component="h2"> {trun[0].name}</Typography>
            </Box>
          </Link>
          <Link
            onClick={() => {
              play('A2')
            }}
            href="#"
            component="button"
          >
            <Box
              border={1}
              width={100}
              height={100}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              2
            </Box>
          </Link>
          <Link
            onClick={() => {
              play('A3')
            }}
            href="#"
            component="button"
          >
            <Box
              border={1}
              width={100}
              height={100}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              3
            </Box>
          </Link>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center">
        <Link
          onClick={() => {
            play('B1')
          }}
          href="#"
          component="button"
        >
          <Box
            border={1}
            width={100}
            height={100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            4
          </Box>
        </Link>
        <Link
          onClick={() => {
            play('B2')
          }}
          href="#"
          component="button"
        >
          <Box
            border={1}
            width={100}
            height={100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            5
          </Box>
        </Link>
        <Link
          onClick={() => {
            play('B3')
          }}
          href="#"
          component="button"
        >
          <Box
            border={1}
            width={100}
            height={100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            6
          </Box>
        </Link>
      </Box>

      <Box display="flex" justifyContent="center">
        <Link
          onClick={() => {
            play('C1')
          }}
          href="#"
          component="button"
        >
          <Box
            border={1}
            width={100}
            height={100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            7
          </Box>
        </Link>
        <Link
          onClick={() => {
            play('C2')
          }}
          href="#"
          component="button"
        >
          <Box
            border={1}
            width={100}
            height={100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            8
          </Box>
        </Link>
        <Link
          onClick={() => {
            play('C3')
          }}
          href="#"
          component="button"
        >
          <Box
            border={1}
            width={100}
            height={100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            9
          </Box>
        </Link>
      </Box>
    </Container>
  )
}

export default Game
