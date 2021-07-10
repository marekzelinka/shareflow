import Head from "next/head";
import { ReactNode } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
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
      <Flex flexDirection="column" flex={1} py={10}>
        {children}
      </Flex>
    </Flex>
  </>
);

interface LayoutHeaderProps {
  children: ReactNode;
}

export const LayoutHeader = ({ children }: LayoutHeaderProps) => (
  <Box as="header">
    <Container maxWidth="2xl" px={{ base: 4, sm: 6, lg: 8 }}>
      {children}
    </Container>
  </Box>
);

interface LayoutContentProps {
  children: ReactNode;
}

export const LayoutContent = ({ children }: LayoutContentProps) => (
  <Box as="main" flex={1}>
    <Container maxWidth="2xl" px={{ base: 0, sm: 6, lg: 8 }}>
      {children}
    </Container>
  </Box>
);
