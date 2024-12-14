// import React, { useEffect } from 'react'
// import { useRecoilValue } from "recoil";
// import { userAtom } from "../../atoms/UserAtom";

// function Home() {
//   const userData = useRecoilValue(userAtom);

//   useEffect(() => {
//   console.log(userData)
//   console.log(userData.firstname, userData.lastname)
   
//   }, [])
  

// const firstname = 'prashant';
  
//   return (
//     <div>`welcome  {firstname} </div>
//   )
// }

// export default Home

import React from 'react'
import { useRecoilValue } from "recoil";
import { userAtom } from "./Atoms";

function Home() {

    const userData = useRecoilValue(userAtom);

  return (
    <div>Welcome {userData[0].fullname.firstname} {userData[0].fullname.lastname} </div>
  )
}

export default Home;