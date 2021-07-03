import {
  Box,
  Flex,
  Stack,
  Button,
  Heading,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { CalendarIcon, UserIcon, ShareIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState } from "react";
import { formatDate } from "client/utils/helpers";

const ShareButton = (props) => {
  const { shareData, children, ...restProps } = props;

  const toast = useToast();
  const [isSharingUrl, setIsSharingUrl] = useState(false);

  const shareUrl = async () => {
    try {
      setIsSharingUrl(true);
      await navigator.share(shareData);
    } catch {
      toast({
        title: "Copied URL to clipboard.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSharingUrl(false);
    }
  };

  return (
    <Button
      variant="outline"
      fontWeight="medium"
      fontSize="sm"
      backgroundColor="white"
      _hover={{ backgroundColor: "gray.50" }}
      _focus={{
        outline: "none",
        ring: "2px",
        ringOffset: "2px",
        ringOffsetColor: "gray.50",
        ringColor: "purple.400",
      }}
      onClick={shareUrl}
      isLoading={isSharingUrl}
      {...restProps}
    >
      <Icon
        as={ShareIcon}
        ml={-1}
        mr={2}
        width={5}
        height={5}
        textColor="gray.500"
        aria-hidden="true"
      />
      {children}
    </Button>
  );
};

export const RoomHeader = (props) => {
  const { room } = props;

  const router = useRouter();

  return (
    <Box
      display={{ base: "block", md: "flex" }}
      alignItems={{ md: "center" }}
      justifyContent={{ md: "space-between" }}
    >
      <Box flex={1} minWidth={0}>
        <Heading
          as="h1"
          size="md"
          fontWeight="bold"
          textColor="gray.900"
          isTruncated
        >
          {room.title}
        </Heading>
        <Flex
          mt={{ base: 1, sm: 0 }}
          flexDirection={{ base: "column", sm: "row" }}
          flexWrap={{ sm: "wrap" }}
        >
          <Flex mt={2} alignItems="center" fontSize="sm" textColor="gray.500">
            <Icon
              as={CalendarIcon}
              mr={1.5}
              width={5}
              height={5}
              flexShrink={0}
              textColor="gray.400"
              aria-hidden="true"
            />
            {formatDate(room.inserted_at)}
          </Flex>
          <Flex
            mt={2}
            ml={{ sm: 8 }}
            alignItems="center"
            fontSize="sm"
            textColor="gray.500"
          >
            <Icon
              as={UserIcon}
              mr={1.5}
              width={5}
              height={5}
              flexShrink={0}
              textColor="gray.400"
              aria-hidden="true"
            />
            {room.host}
          </Flex>
        </Flex>
      </Box>
      <Stack mt={{ base: 5, md: 0 }} ml={{ md: 4 }} spacing={3} direction="row">
        <Box>
          <ShareButton
            shareData={{
              title: `${room.title}, hosted by ${room.host}`,
              text: "Collaborate with other attendees!",
              url: router.asPath,
            }}
          >
            Share URL
          </ShareButton>
        </Box>
      </Stack>
    </Box>
  );
};
