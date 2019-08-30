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

const RecoveryPasswordForm = ({ isFetching, recoveryPasswordRequest, token }) => (
  <Formik
    initialValues={{ password: '', token }}
    onSubmit={({ password, token }) => recoveryPasswordRequest(password, token)}
    validationSchema={
      Yup.object().shape({
        password: Yup.string()
          .typeError('Senha precisa ser um texto')
          .required('Campo senha é obrigatório'),
        token: Yup.string()
          .typeError('Token precisa ser um texto')
          .required('Token é obrigatório'),
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
    }) => (
      <Form onSubmit={handleSubmit} style={{ margin: 'auto', maxWidth: '400px', width: '100%' }}>
        <Grid valign="flex-start" column="1fr">
          <Image alt="Octano" height="80px" src={logo} style={{ justifySelf: 'center' }} />
          <Text
            type="password"
            id="password"
            name="password"
            labelTitle="Senha"
            error={touched.password && errors.password}
            active={touched.password}
            value={values.password}
            required
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleBlur}
          />
          <Link to="/">
            <Paragraph align="center">Voltar</Paragraph>
          </Link>
          <Button type="submit" fontSize="small" disabled={!dirty || isFetching}>
            Trocar senha
          </Button>
        </Grid>
      </Form>
    )}
  />
)

RecoveryPasswordForm.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  recoveryPasswordRequest: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
}

const mapStateToProps = ({ auth: { isFetching } }) => ({ isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RecoveryPasswordForm)
