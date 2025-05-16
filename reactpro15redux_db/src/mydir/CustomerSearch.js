import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setCustomers} from '../redux/action'
import axios from 'axios'


const CustomerSearch = () => {
    const [searchPhone, setSearchPhone] = useState('');
    const customers = useSelector(state=>state.customers);
    const dispatch = useDispatch();

    const handleSearch = async() => {
        const response = await axios.get("/findgogek.jsp",{
            params: { phone: searchPhone }
        })

        dispatch(setCustomers(response.data));
    } 
    return(
        <div>
            <h3>고객 번호 검색</h3>
            <input type="text" value={searchPhone} onChange={e=>setSearchPhone(e.target.value)}/>
            <button onClick={handleSearch}>검색</button>
            <br/>
             <ul>
        {customers.map((cus)=> (
            <li key={cus.gogekno}>
                {cus.gogekno} {cus.gogekname}  {cus.gogektel}
            </li>
        ))}
      </ul>
        </div>

    );
};

export default CustomerSearch;