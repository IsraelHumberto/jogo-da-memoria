/* eslint-disable react/prop-types */
import * as S from './styles'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'

const Table = (props) => {
    const { emojis, columns } = props

    const [table, setTable] = useState([])
    const [moveIsValid, setMoveIsValid] = useState(true)
    const [cardSelect, setCardSelect] = useState([])
    const [rightPairs, setRightPairs] = useState(0)
    const [moves, setMoves] = useState(0)
    const [endGame, setEndGame] = useState(false)

    let emojisTable = emojis


    const getTableInitial = () => {
        let arrayInitial = []

        for (let i = 0; i < Math.pow(columns, 2); i++) {
            let indice = Math.floor(emojisTable.length * Math.random())
            let sortEmoji = emojisTable[indice]
            emojisTable.splice(indice, 1)
            arrayInitial.push(
                { id: i, checked: false, open: false, emoji: sortEmoji }
            )
        }
        setTable(arrayInitial)
    }

    const checkCards = () => {
        let emojisChoosed = []
        if (cardSelect.length == 2) {
            cardSelect.map((card) => {
                emojisChoosed.push(table.find(item => item.id == card).emoji)
            })

            if (emojisChoosed[0] === emojisChoosed[1]) {
                setTimeout(() => {
                    rightPair(emojisChoosed[0], emojisChoosed[1])
                    setCardSelect([])
                }, 1200)
            } else {
                setTimeout(() => {
                    wrongPair(emojisChoosed[0], emojisChoosed[1])
                    setCardSelect([])
                }, 1200)
            }
            setMoves(moves + 1)
        }
    }

    const wrongPair = (id1, id2) => {
        const newState = table.map(card => {
            if (card.emoji == id1) {
                return { ...card, open: false }
            } else if (card.emoji == id2) {
                return { ...card, open: false }
            } else {
                return card
            }


        })

        setTable(newState)
    }

    const rightPair = (id1, id2) => {
        const newState = table.map(card => {
            if (card.emoji == id1) {
                return { ...card, checked: true }
            } else if (card.emoji == id2) {
                return { ...card, checked: true }
            } else {
                return card
            }


        })

        setTable(newState)
        setRightPairs(rightPairs + 2)
    }

    const winGame = () => {
        if (rightPairs == Math.pow(columns, 2)) {
            setEndGame(true)
        }
    }

    useEffect(() => {
        winGame()
    }, [rightPairs])

    const chooseCard = (id) => {
        const newState = table.map(card => {
            if (card.id == id && card.open == false && !!moveIsValid) {
                setCardSelect([...cardSelect, card.id])
                return { ...card, open: true }
            } else {
                return card
            }
        })
        setTable(newState)
    }

    const isTableLengthValid = (index) => {
        chooseCard(index)
    }


    useEffect(() => {
        getTableInitial()
    }, [])

    useEffect(() => {
        checkCards()
        if (cardSelect.length >= 2) {
            setMoveIsValid(false)
        } else {
            setMoveIsValid(true)
        }
    }, [cardSelect])

    return (
        <S.Container>
            <S.Content props={columns}>

                {table && table.map((item, index) => (
                    <S.ButtonCard onClick={() => {
                        isTableLengthValid(index)
                    }} key={index}>
                        <Card item={item} />
                    </S.ButtonCard>
                ))}
            {!!endGame && 
                <S.Modal>
                    <h1>PARABENS</h1>
                    <p>Você completou o desafio com <strong>{moves}</strong> movimentos</p>
                </S.Modal>}
            </S.Content>
        </S.Container>
    )
}

export default Table