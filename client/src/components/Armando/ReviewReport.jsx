import React from 'react';
import axios from 'axios';

const ReviewReport = ({reviewId}) => {
  const handleReport = () => {
    axios.put(`http://3.21.164.220/reviews/${reviewId}/report`)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return <button id='report-button' onClick={handleReport}>Report</button>;
};

export default ReviewReport;