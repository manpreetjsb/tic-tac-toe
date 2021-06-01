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
  const [symbol, setSymbol] = useState<Iturn[]>([])

  const rowH1 = []
  const rowH2 = []
  const rowH3 = []
  const rowV1 = []
  const rowV2 = []
  const rowV3 = []
  const lefttorightbttm = []
  const rgihttoleftbttm = []

  const start = (text: string) => {
    console.log(text)
  }

  const play = (prop: string) => {
    const objIndex = trun.findIndex((obj) => obj.position === prop && obj.filled === false)
    console.log(objIndex)
    if (objIndex !== -1) {
      trun[objIndex].name = 'O'
      trun[objIndex].value = 3
      trun[objIndex].filled = true
      console.log(trun)

      setSymbol([...trun])
      //console.log(symbol)
      computerTurn()
    }
  }

  const checkForCompWhereToPut = (iStart: number, iLimit: number, iplus: number) => {
    for (let i = iStart; i <= iLimit; i = i + iplus) {
      if (trun[i].filled === false) {
        trun[i].name = 'X'
        trun[i].value = 3
        trun[i].filled = true
        setSymbol([...trun])
        console.log(trun[i])
        rowH1.push(trun[0], trun[1], trun[2])
        rowH2.push(trun[3], trun[4], trun[5])
        rowH3.push(trun[6], trun[7], trun[8])
        rowV1.push(trun[0], trun[3], trun[6])
        rowV2.push(trun[1], trun[4], trun[7])
        rowV3.push(trun[2], trun[5], trun[8])
        lefttorightbttm.push(trun[0], trun[4], trun[8])
        rgihttoleftbttm.push(trun[2], trun[4], trun[6])
        const RowHX1 = rowH1.filter((i) => i.name === 'X').reduce((a, b) => a + b.value, 0)
        const RowHX2 = rowH2.filter((i) => i.name === 'X').reduce((a, b) => a + b.value, 0)
        const RowHX3 = rowH3.filter((i) => i.name === 'X').reduce((a, b) => a + b.value, 0)
        const RowVX1 = rowV1.filter((i) => i.name === 'X').reduce((a, b) => a + b.value, 0)
        const RowVX2 = rowV2.filter((i) => i.name === 'X').reduce((a, b) => a + b.value, 0)
        const RowVX3 = rowV3.filter((i) => i.name === 'X').reduce((a, b) => a + b.value, 0)
        const LeftToRightBttmX = lefttorightbttm
          .filter((i) => i.name === 'X')
          .reduce((a, b) => a + b.value, 0)
        const RgihtToLeftBttmX = rgihttoleftbttm
          .filter((i) => i.name === 'X')
          .reduce((a, b) => a + b.value, 0)
        //Check first row
        if (RowHX1 === 9) {
          alert('game over')
          return
        }
        //Check Second row
        if (RowHX2 === 9) {
          alert('game over')
          return
        }
        //Check Third row
        if (RowHX3 === 9) {
          alert('game over')
          return
        }
        //Check first column
        if (RowVX1 === 9) {
          alert('game over')
          return
        }
        //Check Second column
        if (RowVX2 === 9) {
          alert('game over')
          return
        }
        //Check third column
        if (RowVX3 === 9) {
          alert('game over')
          return
        }
        //Check A2 B2 C3 X
        if (LeftToRightBttmX === 9) {
          alert('game over')
          return
        }
        //Check A2 B2 C3 X
        if (RgihtToLeftBttmX === 9) {
          alert('game over')
          return
        }
      }
    }
  }

  const computerTurn = () => {
    rowH1.push(trun[0], trun[1], trun[2])
    rowH2.push(trun[3], trun[4], trun[5])
    rowH3.push(trun[6], trun[7], trun[8])

    rowV1.push(trun[0], trun[3], trun[6])
    rowV2.push(trun[1], trun[4], trun[7])
    rowV3.push(trun[2], trun[5], trun[8])

    lefttorightbttm.push(trun[0], trun[4], trun[8])
    rgihttoleftbttm.push(trun[2], trun[4], trun[6])

    const RowHX1 = rowH1.filter((i) => i.name === 'X').reduce((a, b) => a + b.value, 0)
    const RowHX2 = rowH2.filter((i) => i.name === 'X').reduce((a, b) => a + b.value, 0)
    const RowHX3 = rowH3.filter((i) => i.name === 'X').reduce((a, b) => a + b.value, 0)

    const RowVX1 = rowV1.filter((i) => i.name === 'X').reduce((a, b) => a + b.value, 0)
    const RowVX2 = rowV2.filter((i) => i.name === 'X').reduce((a, b) => a + b.value, 0)
    const RowVX3 = rowV3.filter((i) => i.name === 'X').reduce((a, b) => a + b.value, 0)

    const LeftToRightBttmX = lefttorightbttm
      .filter((i) => i.name === 'X')
      .reduce((a, b) => a + b.value, 0)
    const RgihtToLeftBttmX = rgihttoleftbttm
      .filter((i) => i.name === 'X')
      .reduce((a, b) => a + b.value, 0)

    const RowH1 = rowH1.filter((i) => i.name === 'O').reduce((a, b) => a + b.value, 0)
    const RowH2 = rowH2.filter((i) => i.name === 'O').reduce((a, b) => a + b.value, 0)
    const RowH3 = rowH3.filter((i) => i.name === 'O').reduce((a, b) => a + b.value, 0)

    const RowV1 = rowV1.filter((i) => i.name === 'O').reduce((a, b) => a + b.value, 0)
    const RowV2 = rowV2.filter((i) => i.name === 'O').reduce((a, b) => a + b.value, 0)
    const RowV3 = rowV3.filter((i) => i.name === 'O').reduce((a, b) => a + b.value, 0)

    const LeftToRightBttm = lefttorightbttm
      .filter((i) => i.name === 'O')
      .reduce((a, b) => a + b.value, 0)
    const RgihtToLeftBttm = rgihttoleftbttm
      .filter((i) => i.name === 'O')
      .reduce((a, b) => a + b.value, 0)

    //check winning position
    //Check first row
    if (RowHX1 === 6) {
      checkForCompWhereToPut(0, 2, 1)
      return
    } else if (RowHX1 === 9) {
      alert('game over')
      return
    }
    //Check Second row
    if (RowHX2 === 6) {
      checkForCompWhereToPut(3, 5, 1)
      return
    }
    //Check Third row
    if (RowHX3 === 6) {
      checkForCompWhereToPut(6, 8, 1)
      return
    }
    //Check first column
    if (RowVX1 === 6) {
      checkForCompWhereToPut(0, 6, 3)
      return
    }
    //Check Second column
    if (RowVX2 === 6) {
      checkForCompWhereToPut(1, 7, 3)
      return
    }
    //Check third column
    if (RowVX3 === 6) {
      checkForCompWhereToPut(2, 8, 3)
      return
    }
    //Check A2 B2 C3 X
    if (LeftToRightBttmX === 6) {
      checkForCompWhereToPut(0, 8, 4)
      return
    }
    //Check A2 B2 C3 X
    if (RgihtToLeftBttmX === 6) {
      checkForCompWhereToPut(2, 6, 2)
      return
    }

    //check if not winning position then check for turn Check first row
    if (RowH1 === 6) {
      checkForCompWhereToPut(0, 2, 1)
      return
    }
    //Check Second row
    if (RowH2 === 6) {
      checkForCompWhereToPut(3, 5, 1)
      return
    }
    //Check Third row
    if (RowH3 === 6) {
      checkForCompWhereToPut(6, 8, 1)
      return
    }
    //Check first column
    if (RowV1 === 6) {
      checkForCompWhereToPut(0, 6, 3)
      return
    }
    //Check Second column
    if (RowV2 === 6) {
      checkForCompWhereToPut(1, 7, 3)
      return
    }
    //Check third column
    if (RowV3 === 6) {
      checkForCompWhereToPut(2, 8, 3)
      return
    }
    //Check A2 B2 C3 X
    if (LeftToRightBttm === 6) {
      checkForCompWhereToPut(0, 8, 4)
      return
    }
    //Check A2 B2 C3 X
    if (RgihtToLeftBttm === 6) {
      checkForCompWhereToPut(2, 6, 2)
      return
    }
    /*     if (RowH1 === 6) {
      console.log('h1')
      for (let i = 0; i < 3; i++) {
        if (trun[i].filled === false) {
          trun[i].name = 'X'
          trun[i].value = 3
          trun[i].filled = true
          setSymbol([...trun])
          console.log(trun[i])
          return
        }
      }
    } 
    //Check Second row
    if (RowH2 === 6) {
      console.log('h2')
      for (let i = 3; i <= 5; i++) {
        if (trun[i].filled === false) {
          trun[i].name = 'X'
          trun[i].value = 3
          trun[i].filled = true
          setSymbol([...trun])
          console.log(trun[i])
          return
        }
      }
    }
    //Check Third row
    if (RowH3 === 6) {
      console.log('h3')
      for (let i = 6; i <= 8; i++) {
        if (trun[i].filled === false) {
          trun[i].name = 'X'
          trun[i].value = 3
          trun[i].filled = true
          setSymbol([...trun])
          console.log(trun[i])
          return
        }
      }
    }
    //Check first column
    if (RowV1 === 6) {
      for (let i = 0; i <= 6; i = i + 3) {
        console.log(i)
        if (trun[i].filled === false) {
          trun[i].name = 'X'
          trun[i].value = 3
          trun[i].filled = true
          console.log(trun[i])
          return
        }
      }
    }
    //Check Second column
    if (RowV2 === 6) {
      for (let i = 1; i <= 7; i = i + 3) {
        console.log(i)
        if (trun[i].filled === false) {
          trun[i].name = 'X'
          trun[i].value = 3
          trun[i].filled = true
          console.log(trun[i])
          return
        }
      }
    }
    //Check third column
    if (RowV3 === 6) {
      for (let i = 2; i <= 8; i = i + 3) {
        console.log(i)
        if (trun[i].filled === false) {
          trun[i].name = 'X'
          trun[i].value = 3
          trun[i].filled = true
          console.log(trun[i])
          return
        }
      }
    }
    //Check A2 B2 C3 X
    if (LeftToRightBttm === 6) {
      for (let i = 0; i <= 8; i = i + 4) {
        console.log(i)
        if (trun[i].filled === false) {
          trun[i].name = 'X'
          trun[i].value = 3
          trun[i].filled = true
          console.log(trun[i])
          return
        }
      }
    }
    //Check A2 B2 C3 X
    if (RgihtToLeftBttm === 6) {
      for (let i = 2; i <= 6; i = i + 2) {
        console.log(i)
        if (trun[i].filled === false) {
          trun[i].name = 'X'
          trun[i].value = 3
          trun[i].filled = true
          console.log(trun[i])
          return
        }
      }
    }*/

    let ListOfFalse = trun.filter((x) => x.filled === false).map((x) => x.id)
    console.log(ListOfFalse)
    const random = Math.floor(Math.random() * ListOfFalse.length)
    console.log(random)
    const i = random
    console.log(ListOfFalse[random])
    if (trun[i].filled === false) {
      trun[i].name = 'X'
      trun[i].value = 3
      trun[i].filled = true
      console.log(trun[i])
      return
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
          You First = O
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            start('computer')
          }}
        >
          Computer First = X
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
              {trun[1].name}
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
              {trun[2].name}
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
            {trun[3].name}
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
            {trun[4].name}
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
            {trun[5].name}
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
            {trun[6].name}
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
            {trun[7].name}
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
            {trun[8].name}
          </Box>
        </Link>
      </Box>
    </Container>
  )
}

export default Game
