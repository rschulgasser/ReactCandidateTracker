import React, { useState, useEffect} from "react";
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { usePeopleCounts } from '../CandidateContext';

const Details = () => {

    const [candidate, setCandidate] = useState('');
    const {id} = useParams();
    const history =useHistory();
    const {updateConfirmedCount, updateRefusedCount, updatePendingCount}=usePeopleCounts();

    const getPendingCandidate = async () => {

        const { data } = await axios.get('/api/candidatetracker/getcandidatebyid',{ params: { id: id } });
        setCandidate(data);
        console.log(data);
         }

    useEffect(() => {
        getPendingCandidate();
     
    }, []);
    const onConfirmedClick= async()=>{
        await axios.post('/api/candidatetracker/addconfirmed',{...candidate});
        updateConfirmedCount();
        updatePendingCount();
        getPendingCandidate();
        history.push(`/pending/details/${id}`);
    }
    const onRefusedClick= async()=>{
        await axios.post('/api/candidatetracker/addrefused',{...candidate});
        updateRefusedCount();
        updatePendingCount();
        history.push('/refused');
    }
    const isPending=()=>{
        console.log(candidate.status);
            return candidate.status==="Pending";
    }
    const {firstName, lastName, phoneNumber, email, notes, status} = candidate;
    return (
        <div>
          <div className="container">
              <div className="row">
                  <div className="col-md-6 offset-md-3">
                      <div className="card card-body bg-light">
                          <h4>Name: {firstName} {lastName}</h4>
                          <h4>Email: {email}</h4>
                          <h4>Phone: {phoneNumber}</h4>
                          <h4>Status: {status}</h4>
                          <h4>Notes:</h4>
                          <p>{notes}</p>
                          {!!isPending() &&<div>
                         <button className="btn btn-primary" onClick={onConfirmedClick}>Confirm</button>
                         <button className="btn btn-danger" onClick={onRefusedClick}>Refuse</button>
                        </div>}
                     </div>
                  </div>
                </div>
            </div>
        </div>
      
    );
}
export default Details;