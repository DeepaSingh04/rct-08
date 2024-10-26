import React from 'react';
import { ChakraProvider, Box, SimpleGrid, Heading, Text, Avatar, VStack } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box bg="gray.50" py={10} px={5} textAlign="center">
        {/* Heading Section */}
        <Heading mb={2}>Our Clients Speak</Heading>
        <Text mb={10} color="gray.600">
          We have been working with clients around the world
        </Text>

        {/* Grid of Testimonials */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

const testimonials = [
  {
    title: 'Efficient Collaborating',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    name: 'Jane Cooper',
    position: 'CEO at ABC Corporation',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    title: 'Intuitive Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    name: 'Jane Cooper',
    position: 'CEO at ABC Corporation',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    title: 'Mindblowing Service',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    name: 'Jane Cooper',
    position: 'CEO at ABC Corporation',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
];

function TestimonialCard({ title, description, name, position, image }) {
  return (
    <Box
      bg="white"
      p={6}
      rounded="md"
      shadow="md"
      textAlign="center"
    >
      <VStack spacing={4}>
        <Heading as="h3" size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
        <Avatar name={name} src={image} size="lg" />
        <Text fontWeight="bold">{name}</Text>
        <Text color="gray.500">{position}</Text>
      </VStack>
    </Box>
  );
}

export default App;
