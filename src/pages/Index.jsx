import { Box, Container, Heading, Text, Button, VStack, HStack, FormControl, FormLabel, Input, Textarea, useToast, Image } from "@chakra-ui/react";
import { FaHeart, FaCalendarAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const sendRsvp = () => {
    // For demonstration purposes, show a toast message
    toast({
      title: "RSVP sent",
      description: "We've received your response. Thank you!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="xl" color="brand.500">
            Dori & Anton's Wedding 💒
          </Heading>
          <Text mt={4} fontSize="lg">
            We are getting married! 🎉💍
          </Text>
        </Box>

        <Image src="https://drive.google.com/uc?export=view&id=1G6fvdPFqx8akgq3X21AUIkbtjXfg7Lqq" alt="Dori & Anton's Wedding" borderRadius="md" mb={4} fit="cover" w="full" />
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={4}>
            <HStack justifyContent="center" spacing={2}>
              <FaCalendarAlt />
              <Text fontSize="md">Saturday, June 29, 2024</Text>
            </HStack>
            <HStack justifyContent="center" spacing={2}>
              <FaMapMarkerAlt />
              <Text fontSize="md">Djupvik, Dalarna, two hours north of Stockholm</Text>
            </HStack>
            <Text fontSize="md" fontStyle="italic">
              This won't be your typical wedding - our special day will be anything but conventional.
            </Text>
          </VStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="lg" mb={4}>
            A Celebration Co-created by You
          </Heading>
          <Text fontSize="md">If you're feeling inspired to lead an activity, workshop, or contribute in any other way, we'd be overjoyed to hear your ideas. Let's make this a day to remember together!</Text>
        </Box>

        <VStack spacing={4} as="form" w="full">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your full name" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your email" />
          </FormControl>
          <FormControl id="idea">
            <FormLabel>Your ideas for the celebration</FormLabel>
            <Textarea placeholder="Share your thoughts..." />
          </FormControl>
          <Button leftIcon={<FaEnvelope />} colorScheme="celebration" onClick={sendRsvp}>
            Send RSVP 💌
          </Button>
        </VStack>

        <Text fontSize="md" color="brand.600">
          Consider this a 'save the date' 🗓️. We'll follow up with more details soon. If you already know that you won't be able to join us, please do let us know.
        </Text>
      </VStack>
      <HStack justifyContent="center" mt={10}>
        <FaHeart color="red.500" />
        <Text fontSize="lg" color="brand.400">
          Can't wait to celebrate with you! 🥳
        </Text>
        <FaHeart color="red.500" />
      </HStack>
    </Container>
  );
};

export default Index;
