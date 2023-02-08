import React from 'react';
import { MdOutlineReport } from 'react-icons/md';
import './Report.scss';

const Report = ({reviewID, handleReportClick}) => {
  return (
    <div className='report'>
      <button className='report-button' onClick={() => handleReportClick(reviewID)}>Report</button>
      <div>{MdOutlineReport()}</div>
    </div>
  );
};
export default Report;