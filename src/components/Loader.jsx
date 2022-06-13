import React from 'react'

function Loader() {
  return (
    <div className='row justify-content-center'>
       <div className='col-8 text-center'>
          <p>Fetching Data</p>
          <div className='fetching-data'></div>
       </div>
    </div>
  )
}

export default Loader;