import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Box, Flex, Image, Text, useMediaQuery, Heading, HStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaDribbble } from "react-icons/fa";
import DownloadButton from "./DonloadButton"

const SocialLink = ({ href, color, children }) => (
    <Box
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        rounded="full"
        bg={color}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        w={10}
        h={10}
    >
        {children}
    </Box>
);

function Home() {


    return (
        <>
            <Box
                bg="homeBg"
                minH="100vh"
                pb={{ base: 0, md: 16 }}
                w="full"
                mt={8}
            >
                <Flex
                    flexDir="column"
                    align="center"
                    h={{ base: "100vh", md: "90vh", lg: "80vh", xl: "71vh" }}
                    justify="center"
                    data-aos="fade"
                    aos-animate
                >
                    <Image
                        rounded="full"
                        w={{ base: "250px", "2xl": "280px" }}
                        h={{ base: "250px", "2xl": "280px" }}
                        src="https://imgpile.com/images/higQdE.jpg"
                        alt=""
                    />
                    <Box textAlign="center" mt={5}>
                        <Heading as="h3" size="xl" fontWeight="semibold" color="blackAlpha.900" m={2}>
                            Anuj Pancholi
                        </Heading>
                        <Text fontSize="md" color="gray.500" mt={4}>
                            Full-Stack Developer
                        </Text>
                        <Text fontSize="sm" color="gray.500" mb={4}>
                            with Expertise in JavaScript, React, DB, and Node.js.
                        </Text>

                        <HStack spacing={3} justifyContent="center">
                            <SocialLink href="https://www.facebook.com/" color="#1773EA">
                                <FaFacebook color="white" size={24} />
                            </SocialLink>
                            <SocialLink href="https://twitter.com/" color="#1C9CEA">
                                <FaTwitter color="white" size={24} />
                            </SocialLink>
                            <SocialLink href="https://dribbble.com/" color="#e14a84">
                                <FaDribbble color="white" size={24} />
                            </SocialLink>

                        </HStack>
                        <DownloadButton />
                    </Box>
                </Flex>
            </Box>
            <div className="Toastify" />
        </>
    )
};

export default Home;