import React, { useState} from 'react';
import axios from 'axios';
import {  useHistory } from 'react-router-dom';
import { usePeopleCounts } from '../CandidateContext';


const AddCandidate = () => {

    const [candidate, setCandidate] = useState({ firstName: '', lastName:'',email:'',phoneNumber:'',notes:'' });
    const history=useHistory();
    const {updatePendingCount}=usePeopleCounts();
    
    const onSubmitClick = async () => {
        await axios.post('/api/CandidateTracker/addcandidate', {...candidate});
        updatePendingCount();
        history.push('/pending');
    }
    const onTextChange = e => {
        setCandidate({
            ...candidate,
            [e.target.name]: e.target.value
        })
    }
  
    return (
        <div>
            <br/>
           <div className="row">
               <div className="col-md-6 offset-md-3">
                   <div className="card card-body bg-light">
                       <h4>Add Candidate</h4>
                    
                        <input type="text" name="firstName" placeholder="First Name" className="form-control" onChange={onTextChange}/>
                        <br/>
                        <input type="text" name="lastName" placeholder="Last Name" className="form-control" onChange={onTextChange}/>
                        <br/>
                        <input type="text" name="email" placeholder="Email" className="form-control" onChange={onTextChange}/>
                        <br/>
                        <input type="text" name="phoneNumber" placeholder="Phone Number" className="form-control" onChange={onTextChange}/>
                        <br/><textarea rows="5" className="form-control" name="notes" onChange={onTextChange}></textarea>
                        <br/>
                        <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
            
                    </div>
                </div>
            </div>
        </div>
      
    );
}
export default AddCandidate;
