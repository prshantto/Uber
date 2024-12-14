import React from 'react'
import { captainAtom } from './Atoms';
import { useRecoilValue } from 'recoil';

const CaptainHome = () => {
      const captainData = useRecoilValue(captainAtom);
  
  return (
    <div>
      welcome {captainData[0].fullname.firstname} {captainData[0].fullname.lastname}
    </div>
  )
}

export default CaptainHome