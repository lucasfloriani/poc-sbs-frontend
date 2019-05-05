import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Label } from 'components'
import { font, palette } from 'styled-theme'
import { getOptionsFrom, getShadow } from '@theme'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  ${({ type }) => type !== 'number' && css`flex-direction: column;`}
  justify-items: center;
  position: relative;
`

const Error = styled.div`
  background-color: ${palette('danger', 2)};
  border-left: 5px solid ${palette('danger', 0)};
  border-radius: 0 0 3px 3px;
  box-shadow: ${getShadow()};
  box-sizing: border-box;
  color: ${palette('grayscale', 4)};
  font-family: ${font('primary')};
  font-size: .8em;
  letter-spacing: 0.4px;
  padding: 6px;
  width: 100%;
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
