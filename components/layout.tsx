import Head from "next/head";
import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { Nav } from "./nav";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => (
  <>
    <Head>
      <title>shareflow | {title}</title>
    </Head>
    <Flex flexDirection="column" minHeight="100vh" backgroundColor="gray.50">
      <Nav />
      {children}
    </Flex>
  </>
);
