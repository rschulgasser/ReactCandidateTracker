import React from 'react';
import { Link } from 'react-router-dom';



const PendidingCandidateRow = ({candidate}) => {
    const {firstName, lastName, phoneNumber, email, id} = candidate;
    
    return (
        
        <tr>
        <td>
        <Link to={`/pending/details/${id}`} >
        <button className='link'>View Details</button>
         </Link>
         </td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{phoneNumber}</td>
        <td>{email}</td>
    </tr>
         
    )
    
}

export default PendidingCandidateRow ;