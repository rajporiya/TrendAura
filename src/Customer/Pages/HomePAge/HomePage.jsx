import React from 'react'
import MainCarosel from '../../Components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../Components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../Components/Data/Mens_kurta'

function HomePage() {
  return (
    <div>
        <MainCarosel />

        <div className='space-y-10 py-20 px-5 lg:px-10'>
                <HomeSectionCarosel data={mens_kurta} SectionName={"Men's Collection"} />  
        </div>      
    </div>
  )
}


export default HomePage
