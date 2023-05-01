import React from 'react'

function Contact() {
  return (
    <section className="container mx-auto py-10 px-4">

        <h1 className="text-[40px] text-center">Contact Us</h1>

        <form className="flex flex-col gap-8">

                <label className="mr-20">Enter Your E-mail Id :-</label>
                <input type="text" placeholder="Your E-mail" required></input>

                <label>Enter Your Mobile.no :-</label>
                <input type="number" placeholder="+91 9876543210" required></input>

                <label>Your Message :-</label>
                <textarea rows={5} required></textarea>

                <button className="bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">Submit</button>

        </form>

    </section>
  )
}

export default Contact