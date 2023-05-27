import { useEffect } from 'react';
import { getDataOnce } from '../lib/firebase';

export default function LinkShortener({ link }) {
  useEffect(() => {
    window.open(link, '_self');
  }, [link]);

  return <></>;
}

export async function getStaticPaths() {
  const result = await getDataOnce('linkShortener');
  const paths = result.map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
  });
  console.log(paths);

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const result = await getDataOnce('linkShortener');

  const item = result.find((item) => item.id === id);

  return { props: { link: item.link }};
}
