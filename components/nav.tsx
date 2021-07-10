import {
  Box,
  Container,
  Flex,
  Button,
  Link,
  LinkProps,
  ButtonProps,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { LogoWithMark } from "./logo";

type NavLinkProps = {
  href: string;
} & Omit<LinkProps, "href">;

const NavLink = ({ href, ...props }: NavLinkProps) => {
  const router = useRouter();
  const isCurrent = href === router.pathname;

  return (
    <NextLink href={href} passHref>
      <Link aria-current={isCurrent ? "page" : undefined} {...props} />
    </NextLink>
  );
};

type NavButtonLinkProps = {
  href: string;
} & Omit<ButtonProps, "href">;

const NavButtonLink = ({ href, ...props }: NavButtonLinkProps) => {
  const router = useRouter();
  const isCurrent = href === router.pathname;

  return (
    <NextLink href={href} passHref>
      <Button
        as={Link}
        size="sm"
        backgroundColor="transparent"
        _hover={{
          textColor: "gray.700",
          textDecoration: "none",
        }}
        _active={undefined}
        aria-current={isCurrent ? "page" : undefined}
        _activeLink={{
          backgroundColor: "gray.50",
        }}
        {...props}
      />
    </NextLink>
  );
};

export const Nav = () => (
  <Box as="nav" backgroundColor="white" borderBottomWidth={1}>
    <Container maxWidth="2xl" px={{ base: 4, sm: 6, lg: 8 }}>
      <Flex justifyContent="space-between" height={16}>
        <Flex flexShrink={0} alignItems="center">
          <NavLink href="/" aria-label="Home">
            <LogoWithMark />
          </NavLink>
        </Flex>
        <Flex alignItems="center">
          <NavButtonLink href="/about">About</NavButtonLink>
        </Flex>
      </Flex>
    </Container>
  </Box>
);
