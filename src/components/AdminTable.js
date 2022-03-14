import React from 'react';
import { Table } from 'react-bootstrap';

function AdminTable() {
  return (
    <>
    <div className="table1">
      
      <Table striped bordered hover>
        <thead>
      <div className='clientTitle'><h1>Client list</h1></div>
          {/* <caption >Client list</caption> */}
          <tr>
            <th>Id</th>
            <th>Applicants Name</th>
            <th>Number</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>roy</td>
            <td>Larry</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>4</td>
            <td>roy</td>
            <td>Larry</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>5</td>
            <td>roy</td>
            <td>Larry</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>6</td>
            <td>roy</td>
            <td>Larry</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>7</td>
            <td>roy</td>
            <td>Larry</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>8</td>
            <td>roy</td>
            <td>Larry</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>9</td>
            <td>roy</td>
            <td>Larry</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>10</td>
            <td>roy</td>
            <td>Larry</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
    </>
  );
}

export default AdminTable;
