import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Feedpost from "./Feedpost";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

function Feedposts() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {loading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" width="200px" />
                <Skeleton height="10px" width="200px" />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>Content</Box>
            </Skeleton>
          </VStack>
        ))}
      {!loading && (
        <>
          <Feedpost img={img1} username="aa" avatar={img1} />
          <Feedpost img={img2} username="bb" avatar={img2} />
          <Feedpost img={img3} username="cc" avatar={img3} />
          <Feedpost img={img4} username="dd" avatar={img4} />
        </>
      )}
    </Container>
  );
}

export default Feedposts;
