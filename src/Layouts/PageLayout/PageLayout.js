import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar";

function PageLayout({ children }) {
  // useLocation hook to get the current location object
  const { pathname } = useLocation();

  // loading: A boolean to indicate whether the authentication state is still being loaded
  const [user, loading] = useAuthState(auth);

  // The sidebar should not be rendered if the current path is "/auth" or if there is no authenticated user
  const canRenderSidebar = pathname !== "/auth" && user;

  // The navbar should not be rendered if there is an authenticated user, if the authentication state is still loading, or if the current path is "/auth"
  // const canRenderNavbar = !user && !loading && pathname !== "/auth";
  const canRenderNavbar = !user && pathname !== "/auth";

  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;

  return (
    <Flex flexDirection={canRenderNavbar ? "column" : "row"}>
      {/* Sidebar on left */}
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* Navbar */}

      {canRenderNavbar ? <Navbar /> : null}

      {/* ontent on right */}
      <Box
        flex={1}
        w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
}

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
    </Flex>
  );
};
