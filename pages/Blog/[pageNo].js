import React from 'react';
import { useRouter } from 'next/router';

const PageNo = () => {
  const router = useRouter();
  return <div>This is an blog{router.query.pageNo}</div>;
};

export default PageNo;
