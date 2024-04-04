import React from 'react';


const PricingCards = ({ obj }) => {
    return (
      <>
        <div className='row'>
      
        {obj.map((item, index) => 
          <div className = 'col-sm-12 col-md-6 col-lg-6 col-xl-4'>
            
          <div key={index} className='card m-5 rounded-2'>
            <div className="card-header bg-primary rounded-top-2">
                <h5 className='text-center text-white'>{item.subscribe}</h5>
            <h2 className='text-center text-white'>{item.header}/Month</h2>
            </div>
            <ul className = {item.subscribe}>
            <li>{item.subscribe === 'FREE' || item.subscribe === 'PLUS' || item.subscribe === 'PRO' ? <i className='fa-solid fa-check text-success'></i> : <i className='fa-solid fa-xmark text-danger'></i>}{item.user}</li>
            <li>{item.subscribe === 'FREE' || item.subscribe === 'PLUS' || item.subscribe === 'PRO'  ? <i className='fa-solid fa-check text-success'></i> : <i className='fa-solid fa-xmark text-danger'></i>}{item.storage}</li>
            <li>{item.subscribe === 'FREE' || item.subscribe === 'PLUS' || item.subscribe === 'PRO' ? <i className='fa-solid fa-check text-success'></i> : <i className='fa-solid fa-xmark text-danger'></i>}{item.public}</li>
            <li>{item.subscribe === 'FREE' || item.subscribe === 'PLUS' || item.subscribe === 'PRO' ? <i className='fa-solid fa-check text-success'></i> : <i className='fa-solid fa-xmark text-danger'></i>}{item.access}</li>
            <li className = {item.private}>{item.subscribe === 'PLUS' || item.subscribe === 'PRO' ? <i className='fa-solid fa-check text-success'></i> : <i className='fa-solid fa-xmark text-danger'></i>}{item.private}</li>
            <li className = {item.support}>{item.subscribe === 'PLUS' || item.subscribe === 'PRO' ? <i className='fa-solid fa-check text-success'></i> : <i className='fa-solid fa-xmark text-danger'></i>}{item.support}</li>
            <li className = {item.subdomain}>{item.subscribe === 'PLUS' || item.subscribe === 'PRO' ? <i className='fa-solid fa-check text-success'></i> : <i className='fa-solid fa-xmark text-danger'></i>}{item.subdomain}</li>
            <li className = {item.report}>{item.subscribe === 'PRO' ? <i className='fa-solid fa-check text-success'></i> : <i className='fa-solid fa-xmark text-danger'></i>}{item.report}</li>
          </ul>
          <div className="card-footer d-flex justify-content-center">
            <button>BUTTON</button>
          </div>
          </div>
        
        </div>
        )}
      
      </div>
      </>
    );
  };
        








export default PricingCards;