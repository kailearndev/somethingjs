import React from 'react';
import Echart from '../../components/Echart';
import { optCustomerDta } from '../../ultils/fakeData';
import Table from './Table';

const CustomerInformation = () => {
  
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="mt-5">
        <Echart option={optCustomerDta} />
      </div>
      <div>
        <Table data={[]} />
      </div>
    </div>
  );
};

export default CustomerInformation;