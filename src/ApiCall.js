import  { useEffect, useState } from 'react';
import axios from 'axios';

function ApiCall(url) {
const [data, setData] = useState([]);  

  
useEffect(() => {
  axios.get(url)
    .then(response => setData(response.data))  
    .catch((error) => console.error(error));  
}, []);  
return (data
  );
}

export default ApiCall;