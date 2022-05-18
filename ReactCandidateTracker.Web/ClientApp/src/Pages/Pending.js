import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {  useHistory } from 'react-router-dom';
import PendingRow from '../Components/PendidingCandidateRow.js'



const Pending = () => {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const getPendingCandidates = async () => {

            const { data } = await axios.get('/api/candidatetracker/getpendingcandidates');
            setCandidates(data);
             }

        getPendingCandidates();
     
    }, []);

  
    return (
        <div>
            <br/>
          <div className="container">
              <table className="table table-hover table-striped table-bordered">
                  <thead>
                      <tr>
                          <th></th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {!!candidates && candidates.map(c=>
                <PendingRow
                key={c.id} 
                candidate={c}
                />
                )}
                </tbody>
            </table>
            </div>
        </div>
      
    );
}
export default Pending;