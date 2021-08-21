
import React, { useState, useEffect } from 'react';

import numberUtils from '../utils/number-utils';


const Repo = (props) => {
  const { repo } = props;
  return (
    <div className={'border-b border-gray  px-1 py-6  '}>
      <div className={'text-xl mb-4'}>
        <a href={repo.url} target="_blank" className="text-blue-700 hover:underline" rel="noreferrer">
          <span>{repo.title.split('/')[0]}</span> / <span className={'font-semibold'}>{repo.title.split('/')[1]}</span>
        </a>
      </div>
      <div className={'text-gray-600 mb-4 overflow-x-hidden'}>
        {repo.description}
      </div>
      <div className={'whitespace-nowrap  text-sm  text-gray-700 flex '}>
        <div className={'mr-4 font-semibold'}>
          {repo.language}
        </div>
        <div className={'flex font-semibold items-center mr-4'}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          {numberUtils.toHumanString(repo.stars)}
        </div>
        <div className={'ml-auto mr-4 flex'}>
          today  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>  {repo.starsToday}
        </div>
      </div>
    </div>
  );
};

export default Repo;
