import React, { Component } from 'react'
import Navbar from '../Component/Navbar'
import './ContactItem.css'
import Footer from './Footer'

export class Contact extends Component {
  render() {
    return (
      <section>
        <div>
          <Navbar />
        </div>
        <div className='phone'>
          <div className='phone-img'></div>
          <div className='phone-container'>
            <h1>Contact Us</h1>
            <form>
              <p>Name</p>
              <input type='text' placeholder='Your Name..' />
              <p>Address</p>
              <input type='text' placeholder='Your Address..' />
              <p>Email</p>
              <input type='text' placeholder='Your Email..' />
              <p>Message</p>
              <input type='text' placeholder='Your Message..' /><br />
              <button>Submit</button>
            </form>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </section>
    )
  }
}

export default Contact