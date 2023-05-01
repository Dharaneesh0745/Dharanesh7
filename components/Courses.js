import React from 'react'

function Courses() {
  return (
    <section className="container mx-auto py-10 px-4">

        <h1 className="text-[40px] text-center">Our Courses</h1>
        <br></br> <br></br>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[orange] text-white">

                <h1 className="font-medium text-[30px] text-center">HTML Course</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="bg-red-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">Enroll</button>
            
            </div>

            <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[orange] text-white">

                <h1 className="font-medium text-[30px] text-center">CSS Course</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="bg-red-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">Enroll</button>
            
            </div>

            <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[orange] text-white">

                <h1 className="font-medium text-[30px] text-center">Java Script Course</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="bg-red-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">Enroll</button>
            
            </div>

        </div>
    </section>
  )
}

export default Courses