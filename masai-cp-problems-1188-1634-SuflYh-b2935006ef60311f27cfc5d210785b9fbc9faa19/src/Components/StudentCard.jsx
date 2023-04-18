import { Link } from "react-router-dom";

export const StudentCard = ({id,Poster
  ,name,batch,green_card}) => {
  return (
    <div className={"student-card"}>
      {/* Show student details here with a button to view details */}
<img style={{width:"100%"}} className="student-image" src={Poster
} />
<p className="student-name">{name}</p>
<p className="student-batch">{batch}</p>
<h3 className="student-green-card" >{green_card}</h3>




      <button className="student-detail"><Link to={`/students/${id}`}>View Details</Link></button>
    </div>
  );
};
