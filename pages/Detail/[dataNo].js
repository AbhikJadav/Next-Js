import React from 'react';
import NavigationMenu from '../Components/NavigationMenu/NavigationMenu';
import styles from './DetailInform.module.scss';
export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  const paths = data.map((elements) => {
    return {
      params: { dataNo: elements.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  console.log('context:', context);
  const id = context.params.dataNo;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  console.log('response:', response);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
const DetailInform = ({ data }) => {
  console.log('data:', data);
  const { id, title, body } = data;
  return (
    <>
      <NavigationMenu />
      <div className={styles.mainContainer}>
        <div>No:{id}</div>
        <div>Title:{title}</div>
        <div>Description:{body}</div>
      </div>
    </>
  );
};

export default DetailInform;
