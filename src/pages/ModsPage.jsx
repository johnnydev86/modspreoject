import { chakra, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

export default function Profilepage() {
  return (
    <Layout>
      <Heading>Mods</Heading>
      <Container maxW='container.lg' overflowX='auto' py={4}>
        <chakra.pre p={4}>
          <h1>Content</h1>
        </chakra.pre>
      </Container>
    </Layout>
  )
}
