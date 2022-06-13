import React from 'react'

function UserCard({data}) {
  return (
    <div>
      <h2 className='nav-header ml-2'>User Details</h2>
      <div className='row justify-content-around mb-5'>
         <div className='col-md-3 col-10 card shadow rounded p-5 mt-md-0 mt-2 user user-details-img'>
            <img src={data.avatar} alt='Profile Pic for User' style={{borderRadius:"50%"}}/>
         </div>
         <div className='col-md-8 col-10 text-left p-5 card shadow rounded p-3 user-detail user-card-dashboard'>
           <h2>Name: {data.first_name} {data.last_name}</h2>
           <hr />
           <h2>Email: {data.email}</h2>
           <hr />
           <h2>Id: {data.id}</h2>
         </div>
      </div>
    </div>
  )
}

export default UserCard