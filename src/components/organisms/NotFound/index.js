import React from 'react'
import Flex from '@atoms/Flex'
import Heading from '@atoms/Heading'
import Paragraph from '@atoms/Paragraph'

const NotFound = () => (
  <Flex flow="column" halign="center" style={{ minHeight: '100vh' }} valign="center">
    <Heading>404 Not Found</Heading>
    <Paragraph fontSize="medium" align="center">Página não encontrada</Paragraph>
  </Flex>
)

export default NotFound
