import React from 'react';
import { Card } from './ui/card';


const UserSummaryCard = React.memo(({ summary }) => (
  <Card className="p-4 mb-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <p><strong>Name:</strong> {summary.name}</p>
        <p><strong>PAN:</strong> {summary.pan}</p>
        <p><strong>Risk Profile:</strong> {summary.riskProfile}</p>
      </div>
      <div>
        <p><strong>Portfolio Value:</strong> {summary.portfolioValue}</p>
        <p><strong>Total Invested:</strong> {summary.totalInvested}</p>
        <p><strong>Overall Return:</strong> {summary.overallReturn}</p>
        <p><strong>XIRR:</strong> {summary.xirr}</p>
      </div>
    </div>
  </Card>
));

export default UserSummaryCard;