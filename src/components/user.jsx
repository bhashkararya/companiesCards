// import React from 'react'

// const user = () => {
//   return (
//     <div>
//     <div>
//       {jobOpenings.map((job) => (
//         <div key={job.id} className="job-card">
//           <img src={job.brandLogo} alt={job.companyName} width="40" />
//           <h3>{job.post}</h3>
//           <p>{job.companyName} · {job.location}</p>
//           <span>{job.tag1}</span> <span>{job.tag2}</span>
//           <p>{job.pay} · {job.datePosted}</p>
//         </div>
//       ))}
//     </div>

//     </div>
//   )
// }

// export default user



import React from 'react'

const user = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

export default user
