import React from 'react'

export const Form = () => {
  return <div className='container'>
        <h1>I'm already using PagBrasil and have questions</h1>
        <form>
            <input type='text' name='name' placeholder='Name*' />
            <input type='text' name='email' placeholder='Email*' />
            <input type='text' name='company' placeholder='Company*' />
            <input type='text' name='website' placeholder='Website*' />
            <input type='text' name='phone' placeholder='Phone*' />
            <input type='text' name='inquiry' placeholder='Inquiry*' />
            <button>Submit</button>
        </form>
    </div>

}
