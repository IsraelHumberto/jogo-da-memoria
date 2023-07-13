import { useEffect } from 'react'
import * as S from './styles'


const Card = (item) => {

  return (
    <S.Container props = {item.item}>
        <div className='flipper' data-id={item.item.id}>
            <div className="front">
            </div>
            <div className="back">
                {item.item.emoji}
            </div>
        </div>
    </S.Container>
  )
}

export default Card