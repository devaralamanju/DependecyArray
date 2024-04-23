import React from "react";
import {Link, Outlet} from 'react-router-dom';

function Navigate(){
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Signup">Signup</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}
export default Navigate;

// import React from "react";
// import { Link } from 'react-router-dom';

// function Navigate() {
//   return (
//     <div>
//       <ul>
//         <li><Link to="/home">Home</Link></li>
//         <li><Link to="/signup">Signup</Link></li>
//       </ul>
//     </div>
//   );
// }

// export default Navigate;
