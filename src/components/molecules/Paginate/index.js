import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'components'
import paginate from '@helpers/pagination'

const Wrapper = styled.nav`
  align-items: center;
  display: inline-flex;
`

const Paginate = ({
  to, totalItems, currentPage, pageSize, maxPages, onChange, children, ...props
}) => {
  const paginationInfo = paginate({
    totalItems,
    currentPage,
    pageSize,
    maxPages,
  })

  const { endPage, pages, startPage } = paginationInfo
  const buttonOptions = {
    fontSize: 'small',
    onClick: onChange,
  }
  const buttonStyle = {
    backgroundColor: { type: 'grayscale', position: 4 },
    hoverBackgroundColor: { type: 'primary', position: 1 },
    color: { type: 'grayscale', position: 0 },
    hoverColor: { type: 'grayscale', position: 4 },
  }

  return (
    <Wrapper {...props}>
      { currentPage - 1 >= startPage && <Button data-page={currentPage - 1} {...buttonOptions} {...buttonStyle}>{'<'}</Button>}
      {pages.map(pageNumber => (
        <Button
          data-page={pageNumber}
          key={pageNumber.toString()}
          backgroundColor={pageNumber === currentPage ? buttonStyle.hoverBackgroundColor : buttonStyle.backgroundColor}
          hoverBackgroundColor={buttonStyle.hoverBackgroundColor}
          color={pageNumber === currentPage ? buttonStyle.hoverColor : buttonStyle.color}
          disabled={pageNumber === currentPage}
          hoverColor={buttonStyle.hoverColor}
          {...buttonOptions}
        >
          {pageNumber}
        </Button>
      ))}
      { currentPage + 1 <= endPage && <Button data-page={currentPage + 1} {...buttonOptions} {...buttonStyle}>{'>'}</Button>}
    </Wrapper>
  )
}

Paginate.propTypes = {
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  maxPages: PropTypes.number,
  onChange: PropTypes.func,
  to: PropTypes.string.isRequired,
}

export default Paginate
