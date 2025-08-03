import React, { useMemo, useState, useCallback, Suspense, lazy } from 'react';
import Header from '../components/Header';
import { portfolioByDate } from '../data/portfolioData';

const UserSummaryCard = lazy(() => import('../components/UserSummaryCard'));
const AssetAllocationChart = lazy(() => import('../components/AssetAllocationChart'));
const HoldingsTable = lazy(() => import('../components/HoldingsTable'));

const PortfolioSnapshotPage = () => {
  const [selectedDate, setSelectedDate] = useState('2025-08-01');

  const onDateChange = useCallback((e) => {
    setSelectedDate(e.target.value);
  }, []);

  const snapshot = useMemo(() => portfolioByDate[selectedDate], [selectedDate]);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Header selectedDate={selectedDate} onDateChange={onDateChange} />
      <Suspense fallback={<div className="text-center py-4">Loading...</div>}>
        <UserSummaryCard summary={snapshot.userSummary} />
        <AssetAllocationChart data={snapshot.assetData} />
        <HoldingsTable data={snapshot.holdings} />
      </Suspense>
    </div>
  );
};

export default PortfolioSnapshotPage;
