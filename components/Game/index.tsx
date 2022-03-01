import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { PlayersTypes } from './game.styles'

let currentBoard = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: '',
}
let availableArray: any = [0, 1, 2, 3, 4, 5, 6, 7, 8]

let turn = 'O'

const Game: React.FC = () => {
  const [board, setBoard] = useState(currentBoard)
  const [first, setFirst] = useState(0)
  const [symbol, setSymbol] = useState(false)

  const [winner, setWinner] = useState<string>('')

  const play = (num) => {
    if (currentBoard[num] !== '') return

    currentBoard[num] = turn === 'X' ? 'O' : 'X'
    turn = 'X'

    setSymbol(true)
    let updatedChecked = {
      ...board,
      board: currentBoard[num],
    }
    setBoard(updatedChecked)

    if (first === 0 && board[5] === '') {
      currentBoard[5] = 'O'
      turn = 'O'
      let updatedChecked = {
        ...board,
        board: currentBoard[5],
      }
      setBoard(updatedChecked)
      setFirst(1)
      return
    } else {
      // horizontal
      let t = 0
      let column = 0

      const horizontalRowOne = () => {
        return t === 1 ? 1 : t === 2 ? 4 : t === 3 ? 7 : null
      }
      const horizontalRowTwo = () => {
        return t === 1 ? 2 : t === 2 ? 5 : t === 3 ? 8 : null
      }
      const horizontalRowThree = () => {
        return t === 1 ? 3 : t === 2 ? 6 : t === 3 ? 9 : null
      }

      for (let i = 1; i < 10; i = i + 3) {
        t = t + 1
        let r1 = currentBoard[i] === 'X' ? 3 : currentBoard[i] === 'O' ? 5 : 0
        let r2 = currentBoard[i + 1] === 'X' ? 3 : currentBoard[i + 1] === 'O' ? 5 : 0
        let r3 = currentBoard[i + 2] === 'X' ? 3 : currentBoard[i + 2] === 'O' ? 5 : 0

        // check for if computer can win O
        if (r1 + r2 + r3 === 10) {
          if (r1 === 0) {
            column = horizontalRowOne()
            r1 = currentBoard[column] = 5
          }
          if (r2 === 0) {
            column = horizontalRowTwo()
            r2 = currentBoard[column] = 5
          }
          if (r3 === 0) {
            column = horizontalRowThree()
            r3 = currentBoard[column] = 5
          }
          currentBoard[column] = 'O'
          turn = 'O'
          let updatedChecked = {
            ...board,
            board: currentBoard[column],
          }
          setBoard(updatedChecked)

          if (r1 == r2 && r2 == r3 && r1 != 0) {
            console.log('O is winner ')
            setWinner('O is winner')
            return
          }
          return
        }
        // check for user is winning for X
        if (r1 + r2 + r3 === 6) {
          if (r1 === 0) {
            column = horizontalRowOne()
            r1 = currentBoard[column] = 5
          }
          if (r2 === 0) {
            column = horizontalRowTwo()
            r2 = currentBoard[column] = 5
          }
          if (r3 === 0) {
            column = horizontalRowThree()
            r3 = currentBoard[column] = 5
          }

          currentBoard[column] = turn === 'X' ? 'O' : 'X'
          turn = 'O'
          let updatedChecked = {
            ...board,
            board: currentBoard[column],
          }
          setBoard(updatedChecked)
          if (r1 == r2 && r2 == r3 && r1 != 0) {
            console.log('X is winner ')
            setWinner('X is winner')
            return
          }

          return
        }
      }

      // vertical
      let vt = 0

      const verticalOne = () => {
        return vt === 1 ? 1 : vt === 2 ? 2 : vt === 3 ? 3 : null
      }
      const verticalTwo = () => {
        return vt === 1 ? 4 : vt === 2 ? 5 : vt === 3 ? 6 : null
      }
      const verticalThree = () => {
        return vt === 1 ? 7 : vt === 2 ? 8 : vt === 3 ? 9 : null
      }

      for (let j = 1; j < 4; j++) {
        vt = vt + 1
        let vr1 = currentBoard[j] === 'X' ? 3 : currentBoard[j] === 'O' ? 5 : 0
        let vr2 = currentBoard[j + 3] === 'X' ? 3 : currentBoard[j + 3] === 'O' ? 5 : 0
        let vr3 = currentBoard[j + 6] === 'X' ? 3 : currentBoard[j + 6] === 'O' ? 5 : 0

        if (vr1 + vr2 + vr3 === 10) {
          if (vr1 === 0) {
            column = verticalOne()
            vr1 = currentBoard[column] = 5
          }
          if (vr2 === 0) {
            column = verticalTwo()
            vr2 = currentBoard[column] = 5
          }
          if (vr3 === 0) {
            column = verticalThree()
            vr3 = currentBoard[column] = 5
          }
          currentBoard[column] = 'O'
          turn = 'O'
          let updatedChecked = {
            ...board,
            board: currentBoard[column],
          }
          setBoard(updatedChecked)
          if (vr1 == vr2 && vr2 == vr3 && vr1 != 0) {
            setWinner('O is winner')
            return
          }
          return
        }

        if (vr1 + vr2 + vr3 === 6) {
          if (vr1 === 0) {
            column = verticalOne()
            vr1 = currentBoard[column] = 5
          }
          if (vr2 === 0) {
            column = verticalTwo()
            vr2 = currentBoard[column] = 5
          }
          if (vr3 === 0) {
            column = verticalThree()
            vr3 = currentBoard[column] = 5
          }
          currentBoard[column] = turn === 'X' ? 'O' : 'X'
          turn = 'O'
          let updatedChecked = {
            ...board,
            board: currentBoard[column],
          }
          setBoard(updatedChecked)
          if (vr1 == vr2 && vr2 == vr3 && vr1 != 0) {
            console.log('X is winner ')
            setWinner('X is winner')
            return
          }
          return
        }
      }

      //dignol \

      let dr1 = currentBoard[1] === 'X' ? 3 : currentBoard[1] === 'O' ? 5 : 0
      let dr2 = currentBoard[5] === 'X' ? 3 : currentBoard[5] === 'O' ? 5 : 0
      let dr3 = currentBoard[9] === 'X' ? 3 : currentBoard[9] === 'O' ? 5 : 0

      if (dr1 + dr2 + dr3 === 6) {
        column = dr1 === 0 ? 1 : dr2 === 0 ? 5 : dr3 === 0 ? 9 : null
        currentBoard[column] = turn === 'X' ? 'O' : 'X'
        turn = 'O'
        let updatedChecked = {
          ...board,
          board: currentBoard[column],
        }
        setBoard(updatedChecked)

        return
      }
      if (dr1 == dr2 && dr2 == dr3 && dr1 != 0) {
        console.log(' winner ')
        setWinner('winner')
        return
      }
      //dignol /
      let dr4 = currentBoard[3] === 'X' ? 3 : currentBoard[3] === 'O' ? 5 : 0
      let dr5 = currentBoard[5] === 'X' ? 3 : currentBoard[5] === 'O' ? 5 : 0
      let dr6 = currentBoard[7] === 'X' ? 3 : currentBoard[7] === 'O' ? 5 : 0
      if (dr4 + dr5 + dr6 === 6) {
        column = dr4 === 0 ? 3 : dr5 === 0 ? 5 : dr6 === 0 ? 7 : null
        currentBoard[column] = turn === 'X' ? 'O' : 'X'
        turn = 'O'
        let updatedChecked = {
          ...board,
          board: currentBoard[column],
        }
        setBoard(updatedChecked)

        return
      }
      if (dr4 == dr5 && dr5 == dr6 && dr4 != 0) {
        setWinner('X is winner')
        return
      }
    }
    let availableIndexes = availableArray.filter((index: number) => currentBoard[index] === '')
    let selectedIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)]

    currentBoard[selectedIndex] = turn === 'X' ? 'O' : 'X'
    turn = 'O'
    let updatedCheckedNew = {
      ...board,
      board: currentBoard[selectedIndex],
    }
    setBoard(updatedCheckedNew)
  }

  return (
    <Container>
      <Box py={5} display="flex" justifyContent="center">
        <Button
          data-testid="resetArray"
          size="small"
          variant="contained"
          color="primary"
          /* onClick={() => {
            Reset()
          }} */
        >
          Reset
        </Button>
        <Box m={1}>
          <PlayersTypes>Computer = O, User = X</PlayersTypes>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center">
        {winner && <Typography component="h2">Winner : {winner}</Typography>}
      </Box>

      <Box>
        <Box display="flex" justifyContent="center">
          <Link
            onClick={() => {
              play(1)
            }}
            href="#"
            component="button"
            //disabled={afterturn}
            data-testid="turn"
          >
            <Box
              border={1}
              width={100}
              height={100}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography component="h2" data-testid="turnvalue">
                {currentBoard[1]}
              </Typography>
            </Box>
          </Link>
          <Link
            onClick={() => {
              play(2)
            }}
            href="#"
            component="button"
            //disabled={afterturn}
          >
            <Box
              border={1}
              width={100}
              height={100}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography component="h2"> {currentBoard[2]}</Typography>
            </Box>
          </Link>
          <Link
            onClick={() => {
              play(3)
            }}
            href="#"
            component="button"
            //disabled={afterturn}
          >
            <Box
              border={1}
              width={100}
              height={100}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography component="h2"> {currentBoard[3]}</Typography>
            </Box>
          </Link>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center">
        <Link
          onClick={() => {
            play(4)
          }}
          href="#"
          //disabled={afterturn}
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
            <Typography component="h2"> {currentBoard[4]}</Typography>
          </Box>
        </Link>
        <Link
          onClick={() => {
            play(5)
          }}
          href="#"
          component="button"
          //disabled={afterturn}
        >
          <Box
            border={1}
            width={100}
            height={100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography component="h2"> {currentBoard[5]}</Typography>
          </Box>
        </Link>
        <Link
          onClick={() => {
            play(6)
          }}
          href="#"
          component="button"
          //disabled={afterturn}
        >
          <Box
            border={1}
            width={100}
            height={100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography component="h2"> {currentBoard[6]}</Typography>
          </Box>
        </Link>
      </Box>

      <Box display="flex" justifyContent="center">
        <Link
          onClick={() => {
            play(7)
          }}
          href="#"
          component="button"
          //disabled={winner}
        >
          <Box
            border={1}
            width={100}
            height={100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography component="h2"> {currentBoard[7]}</Typography>
          </Box>
        </Link>
        <Link
          onClick={() => {
            play(8)
          }}
          href="#"
          //disabled={winner}
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
            <Typography component="h2">{currentBoard[8]}</Typography>
          </Box>
        </Link>
        <Link
          //disabled={winner}
          onClick={() => {
            play(9)
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
            <Typography component="h2">{currentBoard[9]}</Typography>
          </Box>
        </Link>
      </Box>
    </Container>
  )
}

export default Game
