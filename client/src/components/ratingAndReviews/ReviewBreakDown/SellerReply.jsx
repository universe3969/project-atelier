import React from 'React';

const SellerReply = ({response}) => {
  return (
    <div className='seller-reply'>
      <span>Response from Seller:</span>
      <div>{response}</div>
    </div>
  );
};
export default SellerReply;