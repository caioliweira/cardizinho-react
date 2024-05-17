import React from 'react'
import { useState } from 'react'
import './App.scss'
import Button from './Button/Button'
import BtnSelect from './Input/Input'
import TittleAndParagraph from './Paragraph/TittleAndParagraph'
import IconStar from './icon-star.svg'

function App() {
  const [color, setColor] = React.useState('')
  
  return (
    <>
    <div className='Box'>

<div className='img'>
  <img src={IconStar} alt="icon star" />
    </div>

<TittleAndParagraph tittle={'How did we do?'} paragraph={'Pleaselet us know how we did with your support request. All feedback is appreciated to help us improve our offering!'}/>
<div className='Campos'>
  <BtnSelect  number={'1'} />
  <BtnSelect number={'2'} />
  <BtnSelect number={'3'} />
  <BtnSelect number={'4'} /> 
  <BtnSelect number={'5'} /> 
</div>

<Button text={'S U B M I T'}/> 
   </div>
    </>
  )
}

export default App
