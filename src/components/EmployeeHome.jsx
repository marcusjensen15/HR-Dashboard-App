import React from 'react';
import '../scss/_employeeHome.scss'
import Header from './Header'
import QuickLinks from './QuickLinks'
import EmployeeDetail from './EmployeeDetail';

function EmployeeHome(props){
  console.log('props inside EmployeeHome: ', props);
  // console.log('props inside selectedEmployee: ', selectedEmployee);
  return(
    <div className='EmployeeHome'>
      <Header />
      <div>
        <h2>Employee Name: {props.selectedEmployee.name}</h2>
      </div>
      <QuickLinks />
      <EmployeeDetail />
    </div>
  )
}

export default EmployeeHome;
