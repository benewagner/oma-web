import React from 'react';
import urls from '@educandu/educandu/utils/urls.js';

function HeaderLogo() {
  const renderImage = () => (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 118 32"
      xmlSpace="preserve"
      width="90"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
      >
      <path
        style={{ fill: '#6D8BB1' }}
        d="m 82.162369,12.856751 v 14.515788 c 0,2.253197 -1.624899,3.8131 -3.813101,3.8131 -2.253197,0 -3.878097,-1.559903 -3.878097,-3.8131 V 13.983351 c 0,-4.073082 -2.253198,-6.6295922 -5.882144,-6.6295922 -3.628948,0 -5.882143,2.5673427 -5.882143,6.6295922 v 13.389188 c 0,2.253197 -1.559905,3.8131 -3.813103,3.8131 -2.253197,0 -3.878097,-1.559903 -3.878097,-3.8131 V 13.983351 c 0,-4.073082 -2.253197,-6.6295922 -5.882144,-6.6295922 -3.628946,0 -5.882143,2.5673427 -5.882143,6.6295922 v 13.389188 c 0,2.253197 -1.559906,3.8131 -3.813102,3.8131 -2.253197,0 -3.813102,-1.559903 -3.813102,-3.8131 V 4.6564227 c 0,-2.2531967 1.559905,-3.81310221 3.758939,-3.81310221 2.188202,0 3.693943,1.37575011 3.878099,3.44479111 1.819888,-2.5023481 4.690548,-4.07308659 8.265331,-4.07308659 4.376401,0 7.702033,1.93904939 9.576086,5.44883649 1.754893,-2.9464878 4.820541,-5.44883649 9.576085,-5.44883649 6.911247,0 11.482636,4.63638559 11.482636,12.64172599 z"
        />
      <path
        style={{ fill: '#6D8BB1' }}
        d="M 117.83442,4.6564227 V 27.372539 c 0,2.253197 -1.5599,3.8131 -3.81309,3.8131 -2.18822,0 -3.75897,-1.440745 -3.87811,-3.509787 -2.12321,2.567344 -5.19973,4.127251 -9.14283,4.127251 -7.95118,0 -14.396622,-6.445443 -14.396622,-15.837374 0,-9.0127791 6.066298,-15.77236934 14.396622,-15.77236934 3.9431,0 7.00879,1.44074624 9.14283,3.94309444 0.24914,-2.0040451 1.75489,-3.31479907 3.87811,-3.31479907 2.24234,0.0216658 3.81309,1.58157097 3.81309,3.83476767 z m -7.70204,11.3309723 c 0,-4.820541 -3.31484,-8.6336362 -7.88623,-8.6336362 -4.636384,0 -8.016178,3.8130952 -8.016178,8.6336362 0,4.820541 3.379794,8.69864 8.016178,8.69864 4.57139,0 7.88623,-3.878099 7.88623,-8.69864 z"
        />
      <path
        style={{ fill: '#6D8BB1' }}
        d="M 20.286125,0.86498573 V 8.7511738 c 2.14487,1.5382372 3.477288,4.1814072 3.477288,7.2362212 0,4.820541 -3.314799,8.69864 -7.886188,8.69864 -4.636385,0 -8.0161755,-3.878099 -8.0161755,-8.69864 0,-3.054814 1.3649172,-5.708817 3.5422805,-7.2362212 V 0.85415305 C 4.9253942,2.7823698 0.23484541,8.8270025 0.23484541,15.987395 c 0,8.763635 6.94374549,15.837373 15.58821559,15.837373 8.69864,0 15.642385,-7.073738 15.642385,-15.837373 C 31.454613,8.8486681 26.774897,2.8040349 20.286125,0.86498573 Z"
        />
    </svg>
  );

  return (
    <a style={{ display: 'flex' }} href={urls.getHomeUrl()}>{renderImage()}</a>
  );
}

export default HeaderLogo;
