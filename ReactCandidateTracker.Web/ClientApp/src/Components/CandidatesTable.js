import React, { useState} from 'react';
import CandidateRow from './CandidateRow';



const CandidatesTable = ({candidates}) => {
    const [toggle, setToggle]=useState(true);

   const onToggleClick=()=>{
        setToggle(!toggle);
    }
        
    return (
        <div>
            <button className="btn btn-success" onClick={onToggleClick}>Toggle Notes</button>
        <br/>
      <div className="container">
          <table className="table table-hover table-striped table-bordered">
              <thead>
                  <tr>
                      
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      {!!toggle&&<th>Notes</th>}

                </tr>
            </thead>
            <tbody>
            {candidates.map(c=>
            <CandidateRow
            key={c.id} 
            candidate={c}
            toggle={toggle}
            />
            )}
            </tbody>
        </table>
        </div>
    </div>
         
    )
    
}

export default CandidatesTable ;