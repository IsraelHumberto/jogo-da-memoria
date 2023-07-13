import './global.css'
import Table from './components/Table/Table'
import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import * as S from './stylesApp'

function App() {
  const [emojis, setEmojis] = useState(["⚽", "🏀", "⚾", "🎮", "🎱", "🎁", "🎈", "🎂", "💘", "🔰", "🎵", "🎤", "🎳", "🎲", "💰", "🌟",
    "🚑", "🔥", "🎓", "👑", "👓", "🎀", "🔞", "🚹", "🚺", "💄", "💎", "💋", "🎄", "👻", "🎃", "☕"])
  const [columns, setColumns] = useState(4)
  const [game, setGame] = useState(false)
  const [loading, setLoading] = useState(false)

  const getEmojis = (col) => {
    setLoading(true)
    let newLengthArray = emojis.slice(0, Math.pow(col, 2) / 2)

    let newStateEmojis = []
    for (let i = 0; i < newLengthArray.length; i++) {
      newStateEmojis.push(emojis[i])
    }
    for (let i = 0; i < newLengthArray.length; i++) {
      newStateEmojis.push(emojis[i])
    }

    setEmojis(newStateEmojis)
    setGame(true)
    setLoading(false)
  }

  const initGame = (col) => {
    setColumns(col)     
    getEmojis(col)
  }

  useEffect(() => {
    setEmojis(["⚽", "🏀", "⚾", "🎮", "🎱", "🎁", "🎈", "🎂", "💘", "🔰", "🎵", "🎤", "🎳", "🎲", "💰", "🌟",
    "🚑", "🔥", "🎓", "👑", "👓", "🎀", "🔞", "🚹", "🚺", "💄", "💎", "💋", "🎄", "👻", "🎃", "☕"])
  }, [game])

  return (
    <>
      {loading && <ReactLoading type={'spokes'} color={'#6F2FC7'} height={350} width={125} />}
      {game && !loading &&
        <>
          <Table
            emojis={emojis}
            columns={columns}
          />
          <S.Button onClick={() => {
            setGame(false)
          }
          }>Reset Game</S.Button>
        </>
      }

      {!game && !loading &&
        <S.Container>
          <S.Title>
            Jogo da Memória
          </S.Title>

          <S.Menu>
            <S.Button onClick={() => initGame(4)}>FACINHO</S.Button>
            <S.Button onClick={() => initGame(6)}>NORMAL</S.Button>
            <S.Button onClick={() => initGame(8)}>GÊNIO DA BOLA</S.Button>
          </S.Menu>
          

        </S.Container>
      }

    </>
    
  )
}

export default App
