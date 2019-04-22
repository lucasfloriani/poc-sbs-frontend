import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as AuthActions } from '@store/ducks/auth'
import logo from '@public/img/logo.png'
import {
  Button,
  Form,
  Image,
  Link,
  Paragraph,
  Text,
} from 'components'

const FieldWrapper = styled.div`
  align-items: flex-start;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  justify-items: stretch;
  width: 400px;
`

const LoginForm = ({ loginRequest }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={(values, { setSubmitting }) => {
      const { email, password } = values
      loginRequest(email, password)
      setSubmitting(false)
    }}
    validationSchema={
      Yup.object().shape({
        email: Yup.string()
          .typeError('E-mail precisa ser um texto')
          .required('Campo e-mail é obrigatório'),
        password: Yup.string()
          .typeError('Senha precisa ser um texto')
          .required('Campo senha é obrigatório'),
      })
    }
    render={({
      values,
      dirty,
      touched,
      errors,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
    }) => {
      const commomEvents = {
        onChange: handleChange,
        onBlur: handleBlur,
        onFocus: handleBlur,
      }

      return (
        <Form onSubmit={handleSubmit} style={{ margin: 'auto', width: 'auto' }}>
          <FieldWrapper>
            <Image alt="POC SBS" src={logo} style={{ justifySelf: 'center' }} />
            <Text
              type="email"
              id="email"
              name="email"
              labelTitle="E-mail"
              error={touched.email && errors.email}
              active={touched.email}
              value={values.email}
              required
              {...commomEvents}
            />
            <Text
              type="password"
              id="password"
              name="password"
              labelTitle="Senha"
              error={touched.password && errors.password}
              active={touched.password}
              value={values.password}
              required
              {...commomEvents}
            />
            <Link to="/register">
              <Paragraph align="center">Cadastre-se</Paragraph>
            </Link>
            <Button
              type="submit"
              fontSize="small"
              disabled={!dirty || isSubmitting}
            >
              Entrar
            </Button>
          </FieldWrapper>
        </Form>
      )
    }}
  />
)

LoginForm.propTypes = {
  loginRequest: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(null, mapDispatchToProps)(LoginForm)