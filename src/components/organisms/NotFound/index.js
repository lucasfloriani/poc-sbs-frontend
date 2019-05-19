import React from 'react'
import { Flex, Heading, Paragraph } from 'components'

const NotFound = () => (
  <Flex flow="column" halign="center" style={{ minHeight: '100vh' }} valign="center">
    <Heading>404 Not Found</Heading>
    <Paragraph fontSize="medium" align="center">Página não encontrada</Paragraph>
  </Flex>
)

export default NotFound
