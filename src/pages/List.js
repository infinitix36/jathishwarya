import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../components/Navbar';
import "../css/List.css";


function List() {
    /*const navigate = useNavigate();

    const navigateToLboard = () => {
        // 👇️ navigate to /contacts
        navigate('/Lboard');
    };*/

    let cat = ["GitHub", "Jira"];
    let job = ["Developer", "Tech-lead", "Project Manager", "Business Analyst", "Quality Assurance Engineer"];
    let mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <div>
    <Navbar/>
      <div className="heading">
        Filtering Option to the leaderboard
      </div>
        <div className="innerbg">
            <div>
            <div class="d-flex justify-content-evenly">
                <div className='cat'>
                <h3>Category</h3>
                    <br/>
                    {cat.map (result => (
                        <div>
                            <input type="radio" value={result} name="categoryradioval"></input>     {/*name for selecting only one option*/} 
                            <b>{result}</b>
                        </div>
                    ))}
                </div>
                <div className='job'>
                <h3>JobRole</h3>
                    <br/>
                    {job.map (result => (
                        <div>
                            <input type="radio" value={result} name="jobroleradioval"></input>     {/*name for selecting only one option*/} 
                            <b>{result}</b>
                        </div>
                    ))}
                </div>
                <div className='mon'>
                <h3>Months</h3>
                    <br/>
                    {mon.map (result => (
                        <div>
                            <input type="radio" value={result} name="monthradioval"></input>   {/*name for selecting only one option*/} 
                            <b>{result}</b>
                        </div>
                    ))}
                </div>
                </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", paddingBottom: "15px"}}>
                    <Link to='/lboard'><button className="button" class="btn btn-primary" type="submit"/*onClick={navigateToLboard}*/>Submit</button></Link>
                    </div>
                </div>
    </div>
    
    )
}

export default List;

