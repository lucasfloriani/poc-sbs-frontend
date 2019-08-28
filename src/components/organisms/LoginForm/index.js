import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as AuthActions } from '@store/ducks/auth'
import logo from '@public/img/logo-verde.png'
import {
  Button,
  Form,
  Grid,
  Image,
  Link,
  Paragraph,
  Text,
} from 'components'

const LoginForm = ({ isFetching, loginRequest }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={({ email, password }) => loginRequest(email, password)}
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
    }) => {
      const commomEvents = {
        onChange: handleChange,
        onBlur: handleBlur,
        onFocus: handleBlur,
      }

      return (
        <Form onSubmit={handleSubmit} style={{ margin: 'auto', maxWidth: '400px', width: '100%' }}>
          <Grid valign="flex-start" column="1fr">
            <Image alt="Octano" height="80px" src={logo} style={{ justifySelf: 'center' }} />
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
              disabled={!dirty || isFetching}
            >
              Entrar
            </Button>
          </Grid>
        </Form>
      )
    }}
  />
)

LoginForm.propTypes = {
  loginRequest: PropTypes.func.isRequired,
}

const mapStateToProps = ({ auth: { isFetching } }) => ({ isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
