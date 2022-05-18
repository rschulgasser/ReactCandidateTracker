import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CandidatesTable from '../Components/CandidatesTable';


const Refused = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const getRefusedCandidates = async () => {

            const { data } = await axios.get('/api/candidatetracker/getrefusedcandidates');
            setCandidates(data);
            
             }

        getRefusedCandidates();
     
    }, []);

  
    return (
        <div>
           <h1>Refused</h1>
           <CandidatesTable
           candidates={candidates}
           />
        
        </div>
      
    );
}
export default Refused;