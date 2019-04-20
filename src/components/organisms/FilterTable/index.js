import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Heading, Sidebar } from 'components'
import { media } from '@theme'

const Wrapper = styled(Flex)`
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

const StyledSidebar = styled(Sidebar)`
  ${media.lessThan('medium')`
    margin-bottom: 8px;
  `}
`

const FilterTable = (Form, Table) => {
  const Content = ({
    columns, paginate, onClear, onSubmit, onDelete, data, options,
  }) => {
    return (
      <Wrapper>
        <StyledSidebar marginSide="right">
          <Heading
            color={{ type: 'grayscale', position: 4 }}
            hoverColor={{ type: 'grayscale', position: 4 }}
            level={4}
            margin="0 0 15px 0"
          >
            Filtro
          </Heading>
          <Form onSubmit={onSubmit} onClear={onClear} />
        </StyledSidebar>
        <Table
          columns={columns}
          paginate={paginate}
          data={data}
          onDelete={onDelete}
          options={options}
        />
      </Wrapper>
    )
  }

  Content.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.shape({
      error: PropTypes.any,
      loading: PropTypes.any,
    }),
    onClear: PropTypes.func,
    onDelete: PropTypes.func,
    onSubmit: PropTypes.func,
    options: PropTypes.shape({
      filter: PropTypes.any,
      first: PropTypes.number,
      skip: PropTypes.number,
    }),
    paginate: PropTypes.func,
  }

  return Content
}

export default FilterTable
