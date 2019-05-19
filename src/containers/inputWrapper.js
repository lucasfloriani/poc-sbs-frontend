import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Error, Label } from 'components'
import { getOptionsFrom } from '@theme'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  ${({ type }) => type !== 'number' && css`flex-direction: column;`}
  flex-wrap: wrap;
  justify-items: center;
  position: relative;
`

function withFormWrapper(WrappedComponent) {
  const FormWrapper = ({ required, ...props }) => {
    const {
      id,
      active,
      color,
      error,
      focusBorderColor,
      labelTitle,
      type,
    } = props
    return (
      <Wrapper type={type}>
        <WrappedComponent {...props} active={active} id={id} />
        <Label
          htmlFor={id}
          active={active}
          color={color}
          focusBorderColor={focusBorderColor}
          required={required}
        >
          {labelTitle}
        </Label>
        {error && <Error>{error}</Error>}
      </Wrapper>
    )
  }

  FormWrapper.propTypes = {
    color: PropTypes.shape({
      type: PropTypes.oneOf(getOptionsFrom('palette')),
      position: PropTypes.number,
    }),
    error: PropTypes.string,
    labelTitle: PropTypes.string.isRequired,
    labelColor: PropTypes.shape({
      type: PropTypes.oneOf(getOptionsFrom('palette')),
      position: PropTypes.number,
    }),
  }

  FormWrapper.defaultProps = {
    color: { type: 'grayscale', position: 1 },
  }

  return FormWrapper
}

export default withFormWrapper
