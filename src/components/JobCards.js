import React from 'react';
import {Link} from 'react-router-dom';
import './JobCards.css'

const JobCards = (props) => {
    return (
        <div className="Card">
            <h5 style={{color:"black",fontFamily:"",fontWeight:"bold",textTransform:"uppercase"}}>{props.jobtitle}</h5>
            <p>Company:{props.company}</p>
            <p>Job Location:{props.joblocation}</p>
            <p>Salary:{props.salary}</p>
            <div>
            <button class="btn btn-success" style={{margin:'0px'}}>Apply Now</button>
            &nbsp;
            <Link to={{pathname:`/JobDetails/${props.index}`,
            state:{index:props.index}}}>
            <button class="btn btn-danger">View Job Details</button>
            </Link>
            </div>
        </div>
    );
};

export default JobCards;