
import React from 'react'
import lang from "../utils/languageConstant";
import { useSelector } from 'react-redux';


const GptSearchBar = () => {

    const langKey = useSelector(store =>  store.config.lang);


  return (
    <div className='pt-[10%] flex justify-center '>
        <form className='bg-black grid grid-cols-12  w-1/2'>
            <input className = "p-4 m-4 col-span-8 bg-white text-black"  type = "text" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='col-span-4 m-4 py-2 px-4 bg-red-700 text-white rounded-lg cursor-pointer'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;


