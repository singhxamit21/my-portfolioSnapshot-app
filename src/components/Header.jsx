import React, { useState } from 'react';
import { Button } from './ui/button';
import Toast from './Toast';

const Header = React.memo(({ selectedDate, onDateChange }) => {
  const [showToast, setShowToast] = useState(false);

  const handleDownloadClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <header className="sticky top-0 z-10 bg-white shadow p-4 mb-4 flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-xl font-bold">Portfolio Snapshot</h1>
        <div className="flex flex-wrap gap-2 items-center">
          <select
            className="border p-1 rounded"
            value={selectedDate}
            onChange={onDateChange}
          >
            <option value="2025-08-01">01/08/2025</option>
            <option value="2025-07-01">01/07/2025</option>
          </select>
          <Button onClick={handleDownloadClick}>Download PDF</Button>
        </div>
      </header>

      {showToast && (
        <Toast message="📄 Download PDF – Coming Soon!" type="info" />
      )}
    </>
  );
});

export default Header;
