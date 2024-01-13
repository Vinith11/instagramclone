import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedUser from './SuggestedUser'
import SuggestedHeader from './SuggestedHeader'
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color= {"gary.500"}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gary.400"}} cursor={"pointer"}>
                See All
            </Text>
        </Flex>

        <SuggestedUser followers={690} name="aa" avatar={img1}/>
        <SuggestedUser followers={690} name="bb" avatar={img2}/>
        <SuggestedUser followers={690} name="cc" avatar={img3}/>
        <SuggestedUser followers={690} name="dd" avatar={img4}/>

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
    Libk to wef
        </Box>

    </VStack>
  )
}

export default SuggestedUsers