import React from 'react';
import CompA from './assets/component/CompA';

const App = () => {

  const obj = [
    {subscribe:'FREE',header:'$0',user:'Single User',storage:'50GB Storage',public:'Unlimited Public Project',access:'Community Access',private:'Unlimited Private Project',support:'Dedicated Phone Support',subdomain:'Free Subdomain',report:'Monthly State Report'},
    {subscribe:'PLUS',header:'$9',user:'Single User',storage:'50GB Storage',public:'Unlimited Public Project',access:'Community Access',private:'Unlimited Private Project',support:'Dedicated Phone Support',subdomain:'Free Subdomain',report:'Monthly State Report'},
    {subscribe:'PRO',header:'$49',user:'Single User',storage:'50GB Storage',public:'Unlimited Public Project',access:'Community Access',private:'Unlimited Private Project',support:'Dedicated Phone Support',subdomain:'Free Subdomain',report:'Monthly State Report'},
    ]
  return (
    <div>
      <CompA obj={obj}/>
    </div>
  );
};

export default App
