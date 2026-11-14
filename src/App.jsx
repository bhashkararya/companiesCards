import Card from "./components/card";

import User from "./components/user"
const app = () => {
  const arr = ["bhashkar arya", "rohit", "rishabh", "ram"]

  const jobOpenings = [
    {
      id: 1,
      brandLogo: "ibm-logo.png",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Bengaluru, India",
    },
    {
      id: 2,
      brandLogo: "public/image.png",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Hyderabad, India",
    },
    {
      id: 3,
      brandLogo: "public/logo-chanel.png",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Noida, India",
    },
    {
      id: 4,
      brandLogo: "public/marvel-logo.png",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$75/hr",
      location: "Mumbai, India",
    },
    {
      id: 5,
      brandLogo: "public/mc-donald-logo.jpg",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Pune, India",
    },
    {
      id: 6,
      brandLogo: "public/nike-logo.png",
      companyName: "Netflix",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Remote, India",
    },
    {
      id: 7,
      brandLogo: "public/Screenshot-2024-01-25-at-15.09.28.png",
      companyName: "NVIDIA",
      datePosted: "4 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hr",
      location: "Bengaluru, India",
    },
    {
      id: 8,
      brandLogo: "public/shell-logo.png",
      companyName: "Adobe",
      datePosted: "6 days ago",
      post: "Web Developer Intern",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$30/hr",
      location: "Noida, India",
    },
    {
      id: 9,
      brandLogo: "public/underground-logo.png",
      companyName: "Salesforce",
      datePosted: "3 weeks ago",
      post: "JavaScript Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Hyderabad, India",
    },
    {
      id: 10,
      brandLogo: "public/favicon.svg",
      companyName: "Uber",
      datePosted: "10 weeks ago",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Mumbai, India",
    }
  ];

  return (
    <div className="parent" >
      {jobOpenings.map(function (elem,idx ) {
        return (
          <div key={idx}>

          {/* // <User name={elem} />
          // <h1>ehlkaslf</h1>
          // <h1>{elem.companyName}</h1>
          // <Card companyName={elem} /> */}

             <Card image={elem.brandLogo} name={elem.companyName} datePosted={elem.datePosted}  post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
          </div>
         
         
          
        )
      })}
      {/* {Card()} */}
    </div>


  )
}

export default app
