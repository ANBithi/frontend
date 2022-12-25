import React from "react";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

const ChatHeader = () => {
  return (
	<Flex w="100%">
  	<Avatar size="md" name="All Students">
    	<AvatarBadge boxSize="1em" bg="green.500" />
  	</Avatar>
  	<Flex flexDirection="column" mx="5" justify="center">
    	<Text fontSize="lg" fontWeight="bold">
      	All Students
    	</Text>
    	<Text fontSize = "sm" color="green.500">Online</Text>
  	</Flex>
	</Flex>
  );
};

export default ChatHeader;