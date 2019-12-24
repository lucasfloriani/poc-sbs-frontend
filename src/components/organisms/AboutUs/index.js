import React from 'react'
import Card from '@atoms/Card'
import Heading from '@atoms/Heading'
import Paragraph from '@atoms/Paragraph'

const AboutUs = () => (
  <Card padding="small" style={{ width: '100%' }}>
    <Heading margin="0 0 12px">Sobre nós</Heading>
    <Paragraph fontSize="small">
      Projeto desenvolvido pela parceria entre UDESC, Prefeitura Municipal e Procon de São Bento do Sul,
      o qual visa fornecer a população uma forma mais eficiente de buscar preços de combustíveis dos postos da região.
    </Paragraph>
    <Paragraph fontSize="small" margin="10px 0 0">
      O desenvolvimento foi realizado pelo setor de extensão da UDESC, onde os alunos Lucas Alexander Floriani,
      Karina Neuburger e Jeferson Venceslau Marcos desenvolveram o mesmo.
    </Paragraph>
  </Card>
)

export default AboutUs
