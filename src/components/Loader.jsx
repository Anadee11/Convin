import React from 'react'

function Loader() {
  return (
    <div className='row justify-content-center'>
       <div className='col-8 text-center'>
        <div class="lds-circle"><div></div></div>
       </div>
    </div>
  )
}

export default Loader;