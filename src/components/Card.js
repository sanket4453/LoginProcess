import React from 'react'
import BoxModel from './BoxModel'
import { Box, CornerLeftDown } from 'lucide-react'
import LeftRightBoxModel from './LeftRightBoxModel'


const Card = () => {
  return (
    <div className='w-96 flex flex-col justify-center items-center'>
        <h2 className=' text-4xl'>Login</h2>
        <BoxModel  data="Enter Username and Password" anchestor="Submit"/>
        <LeftRightBoxModel  data="Authentication" leftanchestor="Success" rightanchestor="Failure" />
        {/* <BoxModel data="Redirect To Dashboard" anchestor="Navigate to" /> */}
       
    </div>
  )
}

export default Card