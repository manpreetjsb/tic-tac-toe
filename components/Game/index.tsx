import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { couldStartTrivia, updateSourceFile } from 'typescript'
import { isBooleanObject } from 'util/types'

/*  const board: string[][] = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]  */

let emptyArray: any = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
]
let availableArray: any = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const Game: React.FC = () => {
  const initialState = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]

  const [board, setBoard] = useState<string[][]>(initialState)
  const [hasplay, setHasplay] = useState<boolean>(false)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    if (hasplay) {
      console.log('useEffect:', board)
      console.log('computerPlay')
      computerTurn()
    }
  }, [hasplay])

  const AllEquals = (a: string, b: string, c: string) => {
    return a == b && b == c && a != ''
  }

  const Reset = () => {
    availableArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    setBoard(initialState)
    setWinner(null)
  }
  function checkWinner() {
    //let winner = null
    // horizontal
    for (let i = 0; i < 3; i++) {
      if (AllEquals(board[i][0], board[i][1], board[i][2])) {
        setWinner(board[i][0])
      }
    }

    // Vertical
    for (let i = 0; i < 3; i++) {
      if (AllEquals(board[0][i], board[1][i], board[2][i])) {
        setWinner(board[0][i])
      }
    }

    // Diagonal
    if (AllEquals(board[0][0], board[1][1], board[2][2])) {
      setWinner(board[0][0])
    }
    if (AllEquals(board[2][0], board[1][1], board[0][2])) {
      setWinner(board[2][0])
    }

    if (winner == null && emptyArray.length == 0) {
      return setWinner('Tie')
    } else {
      return winner
    }
  }

  const play = (indexi: number, indexj: number, other: number) => {
    debugger
    if (board[indexi][indexj] === '') {
      availableArray[other] = null
      updateBoard(indexi, indexj, 'O')
      setHasplay(!hasplay)

      //console.log(availableArray)
      checkWinner()

      //computerTurn()
    }
  }

  const updateBoard = (x: number, y: number, value: string) => {
    setBoard(
      Object.assign([...board], {
        [x]: Object.assign([...board[x]], {
          [y]: value,
        }),
      })
    )
  }

  const computerTurn = () => {
    var availableIndexes = availableArray.filter((index: number) => availableArray[index] != null)
    var selectedIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)]

    console.log(selectedIndex)
    console.log(availableArray)
    let spot = emptyArray[selectedIndex]

    let i = spot[0]
    let j = spot[1]
    debugger
    //board[i][j] = 'X'
    //setPlayer('X')
    availableArray[selectedIndex] = null

    console.log(board)
    updateBoard(i, j, 'X')

    checkWinner()

    console.log('board:', board)
  }

  return (
    <Container>
      <Box py={5} display="flex" justifyContent="center">
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            Reset()
          }}
        >
          Reset
        </Button>
        <Typography color="primary">Computer = X, User = O</Typography>
      </Box>
      <Box>Winner : {winner}</Box>
      <Box>
        <Box display="flex" justifyContent="center">
          <Link
            onClick={() => {
              play(0, 0, 0)
            }}
            href="#"
            component="button"
            disabled={winner}
          >
            <Box
              border={1}
              width={100}
              height={100}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography component="h2"> {board[0][0]}</Typography>
            </Box>
          </Link>
          <Link
            onClick={() => {
              play(0, 1, 1)
            }}
            href="#"
            component="button"
            disabled={winner}
          >
            <Box
              border={1}
              width={100}
              height={100}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {board[0][1]}
            </Box>
          </Link>
          <Link
            onClick={() => {
              play(0, 2, 2)
            }}
            href="#"
            component="button"
            disabled={winner}
          >
            <Box
              border={1}
              width={100}
              height={100}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {board[0][2]}
            </Box>
          </Link>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center">
        <Link
          onClick={() => {
            play(1, 0, 3)
          }}
          href="#"
          disabled={winner}
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
            {board[1][0]}
          </Box>
        </Link>
        <Link
          onClick={() => {
            play(1, 1, 4)
          }}
          href="#"
          component="button"
          disabled={winner}
        >
          <Box
            border={1}
            width={100}
            height={100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {board[1][1]}
          </Box>
        </Link>
        <Link
          onClick={() => {
            play(1, 2, 5)
          }}
          href="#"
          component="button"
          disabled={winner}
        >
          <Box
            border={1}
            width={100}
            height={100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {board[1][2]}
          </Box>
        </Link>
      </Box>

      <Box display="flex" justifyContent="center">
        <Link
          onClick={() => {
            play(2, 0, 6)
          }}
          href="#"
          component="button"
          disabled={winner}
        >
          <Box
            border={1}
            width={100}
            height={100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {board[2][0]}
          </Box>
        </Link>
        <Link
          onClick={() => {
            play(2, 1, 7)
          }}
          href="#"
          disabled={winner}
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
            {board[2][1]}
          </Box>
        </Link>
        <Link
          disabled={winner}
          onClick={() => {
            play(2, 2, 8)
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
            {board[2][2]}
          </Box>
        </Link>
      </Box>
    </Container>
  )
}

export default Game
