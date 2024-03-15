import {
  Box,
  Button,
  CloseButton,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { MessagesLogo, NotificationsLogo } from "../../assets/constants";
import MessageSidebar from "../Messages/MessageSidebar";
import Chat from "../Messages/Chat";

const Message = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip
        hasArrow
        label={"Messages"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          onClick={onOpen}
        >
          <MessagesLogo />
          <Box display={{ base: "none", md: "block" }}>Message</Box>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
        <ModalOverlay />
        <ModalContent bg={"black"} border={"1px solid gray"} maxW={"1000px"}>
          <ModalHeader>Messages</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Flex height={"600px"}>
              <MessageSidebar />
              <Chat />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Message;
