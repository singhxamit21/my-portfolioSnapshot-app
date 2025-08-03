// src/data/portfolioData.js

export const portfolioByDate = {
  '2025-08-01': {
    userSummary: {
      name: 'Rohan Sharma',
      pan: 'ABCDE1234F',
      riskProfile: 'Moderate',
      portfolioValue: '₹ 12,65,000',
      totalInvested: '₹ 10,40,000',
      overallReturn: '₹ 2,25,000 (21.6%)',
      xirr: '12.2%',
    },
    assetData: [
      { name: 'Equity', value: 60, amount: '759000', color: '#4f46e5' },
      { name: 'Debt', value: 30, amount: '379500', color: '#16a34a' },
      { name: 'Gold', value: 10, amount: '126500', color: '#f59e0b' },
    ],
    holdings: [
      { scheme: 'Axis Bluechip Fund', type: 'Equity', invested: '₹ 1,20,000', current: '₹ 1,48,500', return: '23.75%', sip: true },
      { scheme: 'SBI Gold Fund', type: 'Gold', invested: '₹ 50,000', current: '₹ 57,200', return: '14.4%', sip: false },
      { scheme: 'HDFC Short Term Debt', type: 'Debt', invested: '₹ 2,00,000', current: '₹ 2,12,000', return: '6.0%', sip: true },
      { scheme: 'ICICI Flexi Cap', type: 'Equity', invested: '₹ 1,00,000', current: '₹ 1,37,500', return: '37.5%', sip: true },
    ],
  },
  '2025-07-01': {
    userSummary: {
      name: 'Rohan Sharma',
      pan: 'ABCDE1234F',
      riskProfile: 'Moderate',
      portfolioValue: '₹ 12,20,000',
      totalInvested: '₹ 10,00,000',
      overallReturn: '₹ 2,20,000 (22.0%)',
      xirr: '11.9%',
    },
    assetData: [
      { name: 'Equity', value: 58, amount: '708000', color: '#4f46e5' },
      { name: 'Debt', value: 32, amount: '390000', color: '#16a34a' },
      { name: 'Gold', value: 10, amount: '122000', color: '#f59e0b' },
    ],
    holdings: [
      { scheme: 'Axis Bluechip Fund', type: 'Equity', invested: '₹ 1,20,000', current: '₹ 1,45,000', return: '20.8%', sip: true },
      { scheme: 'SBI Gold Fund', type: 'Gold', invested: '₹ 50,000', current: '₹ 56,000', return: '12.0%', sip: false },
      { scheme: 'HDFC Short Term Debt', type: 'Debt', invested: '₹ 2,00,000', current: '₹ 2,08,000', return: '4.0%', sip: true },
      { scheme: 'ICICI Flexi Cap', type: 'Equity', invested: '₹ 1,00,000', current: '₹ 1,35,000', return: '35.0%', sip: true },
    ],
  },
};
