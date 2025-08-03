import React from 'react';
import { Card } from './ui/card';


const HoldingsTable = React.memo(({ data }) => (
  <Card className="p-4 mb-4 overflow-x-auto">
    <h2 className="text-lg font-semibold mb-2">Holdings</h2>
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">Scheme Name</th>
          <th className="p-2">Type</th>
          <th className="p-2">Invested Amt</th>
          <th className="p-2">Current Value</th>
          <th className="p-2">Return %</th>
          <th className="p-2">SIP Active</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}
          >
            <td className="p-2">{item.scheme}</td>
            <td className="p-2">{item.type}</td>
            <td className="p-2">{item.invested}</td>
            <td className="p-2">{item.current}</td>
            <td className="p-2">{item.return}</td>
            <td className="p-2">{item.sip ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Card>
));

export default HoldingsTable;