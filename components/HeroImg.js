import React from 'react'

const HeroImg = () => {
  return (
    <div className="bg-[url('https://cdn.wallpapersafari.com/22/53/IOfeHw.jpg')] h-screen bg-cover bg-center bg-fixed flex items-center">
        <div className="container mx-auto px-4">
            
                <div className="text-[50px] text-center text-white">
                    Welcome, Webloom
                </div>
                <div className="text-center gap-1">
                    <button className="bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded" >Courses</button>
                    <button className="bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded" >Contact</button>
                </div>
            
        </div>
    </div>
  )
}

export default HeroImg