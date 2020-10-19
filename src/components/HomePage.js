import React, { Component } from "react";
import "./Homepage.css";
import JobCards from "./JobCards";
import Pagination from "./Pagination";
import { jobsdata } from "./JobsData";
class HomePage extends Component {
  constructor() {
    super();
    this.state = {

      experience:'',
      location:'',
      skill:'',
      salary:'',
      industry:'',
      changed:false,
      filterjobs:[],

      paginationStart: 0,
      showperpage: 16,
      paginationEnd: 0,
    };
    this.onPaginationChange = this.onPaginationChange.bind(this);
    this.exChange=this.exChange.bind(this);
    this.locationChange=this.locationChange.bind(this);
    this.skillChange=this.skillChange.bind(this);
    this.salaryChange=this.salaryChange.bind(this);
    this.industryChange=this.industryChange.bind(this)
    this.showResults=this.showResults.bind(this);
  }
  componentDidMount() {
    this.setState({
      paginationEnd: this.state.showperpage,
    });
  }
  onPaginationChange(start, end) {
    this.setState({
      paginationStart: start,
      paginationEnd: end,
    });
  }

  exChange(event){
      this.setState({experience:event.target.value})
  }
  locationChange(event){
      this.setState({location:event.target.value})
  }
  skillChange(event){
      this.setState({skill:event.target.value})
  }
  salaryChange(event){
      this.setState({salary:event.target.value})
  }
  industryChange(event){
      this.setState({industry:event.target.value})
  }
  showResults(event){
    console.log(this.state)
    event.preventDefault();
    if(this.state.experience!==''){
        this.setState({changed:true})
        this.setState({filterjobs:jobsdata.filter((data)=>{
            return data.experience[0]===this.state.experience.toString();
        })})
    }
    else if(this.state.location!==''){
        if (this.state.filterjobs.length!==0){
            this.setState({changed:true})
            this.setState({filterjobs:this.state.filterjobs.filter((data)=>{
                return data.joblocation_address.toLowerCase()===this.state.location.toLowerCase();
            })})
        }
        else{
            this.setState({filterjobs:jobsdata.filter((data)=>{
                return data.joblocation_address.toLowerCase()===this.state.location.toLowerCase()
            })})
        }
  }
  else if(this.state.skill!==''){
      if (this.state.filterjobs.length!==0){
        this.setState({changed:true})
          this.setState({filterjobs:this.state.filterjobs.filter((data)=>{
              return data.skills===this.state.skill
          })})
      }
      else{
          this.setState({filterjobs:jobsdata.filter((data)=>{
              return data.skills===this.state.skill
          })})
      }
  }
  else if(this.state.salary!==''){
      if(this.state.filterjobs.length!==0){
        this.setState({changed:true})
        let temp=this.state.filterjobs
          this.setState({filterjobs:temp.filter((data)=>{
              return data.payrate[0]===this.state.salary.toString();
          })})
      }
      else{
          this.setState({filterjobs:jobsdata.filter((data)=>{
              return data.payrate[0]===this.state.salary.toString();
          })})
      }
  }
  else if(this.state.industry!==''){
      if(this.state.filterjobs.length!==0){
        this.setState({changed:true})
          this.setState({filterjobs:this.state.filterjobs.filter((data)=>{
              return data.industry===this.state.industry.toString();
          })})
      }
      else{
          this.setState({filterjobs:jobsdata.filter((data)=>{
              return data.industry===this.state.industry.toString();
          })})
      }
  }
  console.log(this.state.filterjobs)
 
  }

  render() {
    return (
      <div>
        <div class="container" className="homi">
          <div class="jumbotron">
            <div
              class="text-center"
              style={{ color: "black", padding: "10px 0px" }}
            >
              <h1>Filter Jobs</h1>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <form>
                  <select class="custom-select custom-select-sm mb-3"
                  value={this.state.experience} onChange={this.exChange}>
                    <option selected>Experience</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </form>
              </div>
              <div class="col-sm-6">
                <form>
                  <select class="custom-select custom-select-sm mb-3"
                  value={this.state.location} onChange={this.locationChange}>
                    <option selected>Location</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Kochi">Kochi</option>
                  </select>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <form>
                  <select class="custom-select custom-select-sm mb-3"
                  value={this.state.skill} onChange={this.skillChange}>
                    <option selected>Skill</option>
                    <option value="IT Software - Application Programming">
                      IT Software - Application Programming
                    </option>
                    <option value="Accounts">Accounts</option>
                    <option value="Sales">Sales</option>
                    <option value="ITES">ITES</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Production">Production</option>
                    <option value="Hotels">Hotels</option>
                    <option value="HR">HR</option>
                    <option value="Architecture">Architecture</option>
                    <option value="Supply Chain">Supply Chain</option>
                  </select>
                </form>
              </div>
              <div class="col-sm-4">
                <form>
                  <select class="custom-select custom-select-sm mb-3"
                  value={this.state.salary} onChange={this.salaryChange}>
                    <option selected>Salary(Lakhs per annum)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                  </select>
                </form>
              </div>
              <div class="col-sm-4">
                <form>
                  <select class="custom-select custom-select-sm mb-3"
                  value={this.state.industry} onChange={this.industryChange}>
                    <option selected>Industry</option>
                    <option value="IT-Software / Software Services">
                      IT-Software / Software Services
                    </option>
                    <option value="Media / Entertainment / Internet">
                      Media / Entertainment / Internet
                    </option>
                    <option value="Banking / Financial Services / Broking">
                      Banking / Financial Services / Broking
                    </option>
                    <option value="Recruitment / Staffing">Recruitment / Staffing</option>
                    <option value="BPO/Call Centre/ITES">BPO/Call Centre/ITES</option>
                    <option value="FMCG / Foods / Beverage">FMCG / Foods / Beverage</option>
                    <option value="Pharma / Biotech / Clinical Research">
                      Pharma / Biotech / Clinical Research
                    </option>
                    <option value="Industrial Products / Heavy Machinery">
                      Industrial Products / Heavy Machinery
                    </option>
                  </select>
                </form>
              </div>
            </div>
            <div class="text-center">
              <button class="btn btn-primary" onClick={this.showResults}>Search</button>
            </div>
          </div>
        </div>
        <div class="jumbotron">
          <div className="jobsdetails">
          {
              this.state.changed===false? (jobsdata
              .slice(this.state.paginationStart, this.state.paginationEnd)
              .map((data, index) => (
                <JobCards
                  index={index}
                  jobtitle={data.jobtitle}
                  company={data.company}
                  joblocation={data.joblocation_address}
                  salary={data.payrate}
                />
              ))): this.state.filterjobs
              .slice(this.state.paginationStart, this.state.paginationEnd)
              .map((data, index) => (
                <JobCards 
                  index={index}
                  jobtitle={data.jobtitle}
                  company={data.company}
                  joblocation={data.joblocation_address}
                  salary={data.payrate}
                />
              ))
          }
            
          </div>
          <br></br>
          <Pagination
            showperpage={this.state.showperpage}
            onPaginationChange={this.onPaginationChange}
          />
        </div>
        <footer
          style={{
            backgroundColor: "lightblack",
            height: "30px",
            textAlign: "center",
            color: "white",
            fontSize: "18px",
          }}
        >
          Done By Deepak And KrishnaVamshi
        </footer>
      </div>
    );
  }
}

export default HomePage;
