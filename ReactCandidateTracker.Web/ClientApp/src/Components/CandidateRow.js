import React from 'react';




const CandidateRow = ({candidate,toggle}) => {
    const {firstName, lastName, phoneNumber, email, notes} = candidate;
    
    return (
        
     <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{phoneNumber}</td>
        <td>{email}</td>
        {!!toggle && <td>{notes}</td>}
    </tr>
         
    )
    
}

export default CandidateRow ;