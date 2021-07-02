import Head from "next/head";

export const Layout = (props) => {
  const { title, children } = props;

  return (
    <>
      <Head>
        <title>
          {title !== undefined ? `shareflow | ${title}` : "shareflow"}
        </title>
      </Head>
      {children}
    </>
  );
};
