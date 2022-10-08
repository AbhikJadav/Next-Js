import React from 'react';
import NavigationMenu from '../Components/NavigationMenu/NavigationMenu';
import style from './Detail.module.scss';
import Link from 'next/link';
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  console.log('response:', response);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
const Detail = ({ data }) => {
  // console.log('data:', data);
  return (
    <div>
      <NavigationMenu />
      <div className={style.mainContainer}>
        <div className={style.headingContainer}>
          <div className={style.headingNo}>No</div>
          <div className={style.headingTitle}>Title</div>
        </div>
        {data.slice(0, 10).map((element, index) => {
          return (
            <div className={style.rowContainer} key={index}>
              <div className={style.number}>{element.id}</div>
              <div className={style.title}>
                <Link href={`/Detail/${element.id}`}>{element.title}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
