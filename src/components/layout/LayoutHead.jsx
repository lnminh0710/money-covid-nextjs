import Head from 'next/head';
const DEFAULT_TITLE = '';
const LayoutHead = ({ title = 'Cổng thông tin hổ trợ', description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta name="title" content={DEFAULT_TITLE} />
      <meta name="description" content={description} />
    </Head>
  );
};

export default LayoutHead;
