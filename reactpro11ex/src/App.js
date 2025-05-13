import React, {useState, useCallback} from "react";
import VisitTemplate from "./mydir/VisitTemplate";
import VisitItemList from "./mydir/VisitItemList";
import Form from "./mydir/Form";

const App = () => {
  const [clientName, setClient] = useState('');
  const [address, setAddress] = useState('');
  const [visitDate, setVisitDate] = useState('');;
  const [visits, setVisits] = useState([
    {id:0, clientName:'홍길동', address:'강남구 테헤란로', visitDate:'2025-05-13'},
    {id:1, clientName:'최영식', address:'경기도 안산시', visitDate:'2025-04-13'},
    {id:2, clientName:'주먹밥', address:'인천 미추홀시', visitDate:'2025-04-30'}
  ]);
  const [nextId, setNextId] = useState(3);

  const handleChange = useCallback((e) => {
    const {name, value} = e.target;

    if(name === 'clientName') setClient(value);
    else if(name === 'address') setAddress(value);
    else if(name === 'visitDate') setVisitDate(value);
    else return;
  },[]);

  const addVisit = useCallback(() => {
    if(clientName.trim() === '' || address.trim() === '' || visitDate.trim() === '') return;

    setVisits((prevVisits) => 
      prevVisits.concat({
        id:nextId,
        clientName:clientName,
        address:address,
        visitDate:visitDate
      })
    );

    setClient('');
    setAddress('');
    setVisitDate('');
    setNextId((prevId) => prevId + 1);
  },[clientName, address, visitDate, nextId]);

  const handleKeyDown = useCallback(
    (e) => {
      if(e.key === 'Enter'){
        addVisit();
      }
    }, [addVisit]
  );

  const deleteVisit = useCallback((id) => {
    setVisits((prevVisits) => prevVisits.filter((visit) => visit.id !== id));
  },[]);

  const clearVisits = useCallback(() => {
    setVisits([]);
    setNextId(0);
  },[]);
  
  return (
    <div>
      <VisitTemplate>
        <Form 
          clientName={clientName} 
          address={address} 
          visitDate={visitDate} 
          onChange={handleChange} 
          onCreate={addVisit} 
          onKeyDown={handleKeyDown}
        />
        <VisitItemList visits={visits} onRemove={deleteVisit} allRemove={clearVisits}/>
      </VisitTemplate>
    </div>
  );
}

export default App;
