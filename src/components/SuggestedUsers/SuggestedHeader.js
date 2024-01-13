import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../../assets/profilepic.png";
import { Link } from "react-router-dom";

function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex gap={2} alignItems={"center"}>
        <Avatar name="As a Program" size={"lg"} src={img1} />
        <Text fontSize={12} fontWeight={"bold"}>
          asaprogr
        </Text>
      </Flex>

      <Link
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        style={{ textDecoration: "none" }}
      >
        Log Out
      </Link>
    </Flex>
  );
}

export default SuggestedHeader;
