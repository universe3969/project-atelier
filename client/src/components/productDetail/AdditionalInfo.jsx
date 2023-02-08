import React, {useEffect, useState} from 'react';

export default function AdditionalInfo ({slogan, features, description}) {
  const include = [];
  for (let feature of features) {
    include.push(<div key={feature.value}>&#x2713;{feature.value + ' ' + feature.feature}</div>)
  }

  return (
    <div className="additional-info-container">
      <div className="additional-info-left">
        <div className="slogan">{slogan}</div>
        <div className="description">{description}</div>
      </div>
      <div className="additional-info-divider"></div>
      <div className="additional-info-right">
        <div>
          {include}
        </div>
      </div>
    </div>
  );
}