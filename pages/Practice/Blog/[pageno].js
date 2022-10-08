import React from 'react';
import { useRouter } from 'next/router';

const Pageno = () => {
  const router = useRouter();
  console.log('router:', router);
  return (
    <div>
      <h1>This is page {router.query.pageno} .</h1>
    </div>
  );
};

export default Pageno;
