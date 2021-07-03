import {
  Box,
  Container,
  Flex,
  Image,
  Stack,
  Button,
  Link,
  LinkProps,
  ButtonProps,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
} & Omit<LinkProps, "href">;

const NavLink = ({ href, ...restProps }: NavLinkProps) => {
  const router = useRouter();
  const isCurrent = href === router.pathname;

  return (
    <NextLink href={href} passHref>
      <Link aria-current={isCurrent ? "page" : undefined} {...restProps} />
    </NextLink>
  );
};

type NavButtonLinkProps = {
  href: string;
} & Omit<ButtonProps, "href">;

const NavButtonLink = ({ href, ...restProps }: NavButtonLinkProps) => {
  const router = useRouter();
  const isCurrent = href === router.pathname;

  return (
    <NextLink href={href} passHref>
      <Button
        as={Link}
        fontSize="sm"
        fontWeight="medium"
        textColor="gray.900"
        backgroundColor="transparent"
        _hover={{
          textColor: "gray.700",
          textDecoration: "none",
        }}
        _active={undefined}
        aria-current={isCurrent ? "page" : undefined}
        _activeLink={{
          backgroundColor: "gray.100",
        }}
        {...restProps}
      />
    </NextLink>
  );
};

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => (
  <>
    <Head>
      <title>
        {title !== undefined ? `shareflow | ${title}` : "shareflow"}
      </title>
    </Head>
    {children}
  </>
);

export const LayoutNav = () => (
  <Box
    as="nav"
    backgroundColor="gray.50"
    borderBottomWidth={1}
    borderBottomColor="gray.200"
  >
    <Container mx="auto" px={{ base: 4, sm: 6, lg: 8 }} maxWidth="2xl">
      <Flex
        height={16}
        position="relative"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flexShrink={0}>
          <NavLink href="/" aria-label="Home" display="block">
            <Image
              height={8}
              width="auto"
              src="/shareflow-logo-purple-600-mark-gray-800.svg"
              alt=""
            />
          </NavLink>
        </Box>
        <Box>
          <Stack spacing={4}>
            <Box>
              <NavButtonLink href="/about">About</NavButtonLink>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Container>
  </Box>
);

Layout.Nav = LayoutNav;

interface LayoutHeaderProps {
  children: ReactNode;
}

export const LayoutHeader = ({ children }: LayoutHeaderProps) => (
  <Box as="header" py={8} backgroundColor="gray.50">
    <Container mx="auto" px={{ base: 4, sm: 6, lg: 8 }} maxWidth="2xl">
      {children}
    </Container>
  </Box>
);

Layout.Header = LayoutHeader;

interface LayoutContentProps {
  children: ReactNode;
}

const LayoutContent = ({ children }: LayoutContentProps) => (
  <Box as="main" pt={8} pb={16}>
    <Container mx="auto" px={{ base: 0, sm: 6, lg: 8 }} maxWidth="2xl">
      {children}
    </Container>
  </Box>
);

Layout.Content = LayoutContent;
