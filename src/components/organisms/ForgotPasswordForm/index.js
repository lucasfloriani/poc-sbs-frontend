import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as AuthActions } from '@store/ducks/auth'
import logo from '@assets/img/logo-verde.png'
import Button from '@atoms/Button'
import Form from '@molecules/Form'
import Grid from '@atoms/Grid'
import Image from '@atoms/Image'
import Link from '@atoms/Link'
import Paragraph from '@atoms/Paragraph'
import Text from '@atoms/Text'

const ForgotPassworForm = ({ forgotPasswordRequest, isFetching }) => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={({ email }) => forgotPasswordRequest(email)}
    validationSchema={
      Yup.object().shape({
        email: Yup.string()
          .typeError('E-mail precisa ser um texto')
          .required('Campo e-mail é obrigatório'),
      })
    }
  >
    {({
      values,
      dirty,
      touched,
      errors,
      handleBlur,
      handleChange,
      handleSubmit,
    }) => (
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
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleBlur}
          />
          <Link to="/">
            <Paragraph align="center">Voltar</Paragraph>
          </Link>
          <Button type="submit" fontSize="small" disabled={!dirty || isFetching}>
            Solicitar troca de senha
          </Button>
        </Grid>
      </Form>
    )}
  </Formik>
)

ForgotPassworForm.propTypes = {
  forgotPasswordRequest: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ auth: { isFetching } }) => ({ isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassworForm)
