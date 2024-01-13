import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost'
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

function ProfilePosts() {

  const [isLoading, setIsLoading] = useState(true)
  

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  },[])

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
				[0, 1, 2].map((_, idx) => (
					<VStack key={idx} alignItems={"flex-start"} gap={4}>
						<Skeleton w={"full"}>
							<Box h='300px'>contents wrapped</Box>
						</Skeleton>
					</VStack>
				))}

      {!isLoading && 
      (
        <>
          <ProfilePost imgV={img1} />
          <ProfilePost imgV={img2} />
          <ProfilePost imgV={img3} />
          <ProfilePost imgV={img4} />
        </>
      )
      }

    </Grid>
  )
}

export default ProfilePosts