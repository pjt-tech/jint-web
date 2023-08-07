import axios from 'axios'
import React, { useState } from 'react'

export default function SighUp() {
    const [requestResult, setRequestResult] = useState<String>('');
  
   const signUpHandler = () => {
        const data = {
            "userEmail" : "dktkd7044@gmail.com",
            "userPassword" : "qkrwlsxo1!",
            "userPasswordCheck" : "qkrwlsxo1!",
            "userNickname" : "tony",
            "userPhoneNumber" : "010-7443-9223",
            "userAddress" : "대한민국 인천광역시",
            "userAddressDetail" : "부평구"
        };
        axios.post('https://port-0-jint-web-app-ac2nlkv8q7cq.sel4.cloudtype.app/api/auth/signUp', data)
        .then((response) => {
            setRequestResult('Success!!');
        })
        .catch((error) => {
            setRequestResult('Failed!!');
        })
   };
  
    return (
    <div>
        <h3>{requestResult}</h3>
        <button onClick={() => signUpHandler()}>회원가입</button>
    </div>
  )
}
