import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CandidatesTable from '../Components/CandidatesTable';


const Confirmed = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const getConfirmedCandidates = async () => {

            const { data } = await axios.get('/api/candidatetracker/getconfirmedcandidates');
            setCandidates(data);
            
             }

        getConfirmedCandidates();
     
    }, []);

  
    return (
        <div>
           <h1>Confirmed</h1>
           <CandidatesTable
           candidates={candidates}
           />
        
        </div>
      
    );
}
export default Confirmed;