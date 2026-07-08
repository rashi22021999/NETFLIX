
import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggesstion from './GptMovieSuggesstion'
import { BACKGROUND_URL } from '../utils/constants'



const GptSearch = () => {
  return (
    <div>

       <div className ="absolute -z-30">
         <img src = {BACKGROUND_URL} alt = "background"/>
    </div>

<GptSearchBar />
<GptMovieSuggesstion />
    </div>
  )
}

export default GptSearch


