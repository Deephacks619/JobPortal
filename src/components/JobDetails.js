import React, { Component } from 'react';
import Nav from './Nav';
import {jobsdata} from './JobsData'

class JobDetails extends Component {
    constructor() {
        super()
        this.state = {
            details:''
        }
    }
    componentDidMount(){
    const index=this.props.location.state.index;
    this.setState({
        details:jobsdata[index]
    })
    
    }
    render() {
        return (
            <div>
                <Nav />
                <br></br><br></br>
                <div class="container">
                    <div class="jumbotron">
                        <h2 style={{textAlign: "center",fontWeight:"bold",fontFamily:"Verdana"}}>{this.state.details.jobtitle}</h2>
                        <br></br>
                        <h5>Company:{this.state.details.company}</h5>
                        <h5>Industry:{this.state.details.industry}</h5>
                        <h5>Job Location:{this.state.details.joblocation_address}</h5>
                        <h5>CTC:{this.state.details.payrate}</h5>
                        <h5>Experience Required: {this.state.details.experience}</h5>
                        <h5>Qualifications Required: {this.state.details.education}</h5>
                        <h5>Openings:{this.state.details.numberofpositions}</h5>
                        <hr></hr>
                        <h4>Description:</h4>
                        <p>{this.state.details.jobdescription}</p>
                        <br></br>
                        <h5>Job ID:{this.state.details.jobid}</h5>
                        <button class="btn btn-primary">Apply Now</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobDetails;