import {
  Box,
  Flex,
  Stack,
  Button,
  Heading,
  Icon,
  useToast,
  Text,
} from "@chakra-ui/react";
import { CalendarIcon, UserIcon, ShareIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { formatDate } from "client/utils/helpers";
import { Room } from "client/utils/types";

interface ShareButtonProps {
  shareData: {
    text?: string;
    title?: string;
    url?: string;
  };
  children: ReactNode;
}

const ShareButton = ({ shareData, children }: ShareButtonProps) => {
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
      backgroundColor="white"
      onClick={shareUrl}
      isLoading={isSharingUrl}
      leftIcon={
        <Icon as={ShareIcon} width={5} height={5} textColor="gray.500" />
      }
    >
      {children}
    </Button>
  );
};

interface RoomHeaderProps {
  room: Room;
}

export const RoomHeader = ({ room }: RoomHeaderProps) => {
  const router = useRouter();

  return (
    <Box
      display={{ base: "block", md: "flex" }}
      alignItems={{ md: "center" }}
      justifyContent={{ md: "space-between" }}
    >
      <Box flex={1} minWidth={0}>
        <Heading as="h1" size="lg" isTruncated>
          {room.title}
        </Heading>
        <Flex
          mt={{ base: 1, sm: 0 }}
          flexDirection={{ base: "column", sm: "row" }}
          flexWrap={{ sm: "wrap" }}
        >
          <Stack mt={2} direction="row" spacing={1.5} alignItems="center">
            <Icon
              as={CalendarIcon}
              textColor="gray.400"
              width={5}
              height={5}
              aria-hidden="true"
            />
            <Text as="span" fontSize="sm" textColor="gray.500">
              {formatDate(room.inserted_at)}
            </Text>
          </Stack>
          <Stack
            mt={2}
            ml={{ sm: 6 }}
            direction="row"
            spacing={1.5}
            alignItems="center"
          >
            <Icon
              as={UserIcon}
              textColor="gray.400"
              width={5}
              height={5}
              aria-hidden="true"
            />
            <Text as="span" fontSize="sm" textColor="gray.500">
              {room.host}
            </Text>
          </Stack>
        </Flex>
      </Box>
      <Stack mt={{ base: 4, md: 0 }} ml={{ md: 4 }} direction="row" spacing={3}>
        <ShareButton
          shareData={{
            title: `${room.title}, hosted by ${room.host}`,
            text: "Collaborate with other attendees!",
            url: router.asPath,
          }}
        >
          Share URL
        </ShareButton>
      </Stack>
    </Box>
  );
};
