import {
  Box,
  Container,
  Flex,
  Image,
  Stack,
  Button,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const NavLink = (props) => {
  const { href, variant = "link", children, ...restProps } = props;
  const router = useRouter();
  const isCurrent = href === router.pathname;

  return (
    <NextLink href={href} passHref>
      {variant === "link" ? (
        <Link aria-current={isCurrent ? "page" : undefined} {...restProps}>
          {children}
        </Link>
      ) : variant === "button" ? (
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
          aria-current={isCurrent ? "page" : undefined}
          _activeLink={{
            backgroundColor: "gray.100",
          }}
          {...restProps}
        >
          {children}
        </Button>
      ) : null}
    </NextLink>
  );
};

export const Nav = () => {
  return (
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
                <NavLink href="/about" variant="button">
                  About
                </NavLink>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
