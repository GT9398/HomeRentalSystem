import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';

export default function ContactUs() {
  return (
    <div  className='form-control form-control-sm'>
        <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
          <h2>Contact us</h2>
    
          {/* <MDBInput v-model='name' wrapperClass='mb-4' placeholder='Name'/>
    
          <MDBInput type='email'  v-model='email' wrapperClass='mb-4' placeholder='Email' />
    
          <MDBInput  v-model='subject' wrapperClass='mb-4' placeholder='Subject'/>
    
          <MDBTextArea wrapperClass='mb-4' label='Message' />
          {/*  */}
    
          {/* <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
    
          <MDBBtn type='button' className='btn btn-primary'>Send</MDBBtn> */} 
        </form>
    </div> 
  );
}