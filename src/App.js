import DataTable from 'datatables.net-react';  
import DT from 'datatables.net-dt';  
import DisplayTable from './DisplayTable.jsx';
DataTable.use(DT);

function App() {
  return (
  <DisplayTable/>
  );
}

export default App;
