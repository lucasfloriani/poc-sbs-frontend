import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { isCPF } from 'brazilian-values'
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

const UserRegisterForm = ({ createUserRequest, isFetching }) => (
  <Formik
    initialValues={{
      name: '',
      cpf: '',
      email: '',
      password: '',
    }}
    onSubmit={({
      name, cpf, email, password,
    }) => {
      createUserRequest(name, cpf, email, password)
    }}
    validationSchema={
      Yup.object().shape({
        name: Yup.string()
          .typeError('Nome precisa ser um texto')
          .required('Campo nome é obrigatório'),
        cpf: Yup.string()
          .typeError('CPF precisa ser um texto')
          .matches(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/, 'CPF é inválido')
          .length(14, 'CPF é inválido')
          .test('cpf', 'CPF é inválido', value => value && isCPF(value))
          .required('Campo cpf é obrigatório'),
        email: Yup.string()
          .typeError('E-mail precisa ser um texto')
          .email('E-mail é inválido')
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
      const commomEvents = { onChange: handleChange, onBlur: handleBlur, onFocus: handleBlur }

      return (
        <Form onSubmit={handleSubmit} style={{ margin: 'auto', maxWidth: '400px', width: '100%' }}>
          <Grid valign="flex-start" column="1fr">
            <Image alt="Octano" height="80px" src={logo} style={{ justifySelf: 'center' }} />
            <Text
              id="name"
              name="name"
              labelTitle="Nome"
              error={touched.name && errors.name}
              active={touched.name}
              value={values.name}
              required
              {...commomEvents}
            />
            <Text
              id="cpf"
              name="cpf"
              labelTitle="CPF"
              maskType="CPF"
              error={touched.cpf && errors.cpf}
              active={touched.cpf}
              value={values.cpf}
              required
              {...commomEvents}
            />
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
            <Link to="/">
              <Paragraph align="center">Voltar</Paragraph>
            </Link>
            <Button type="submit" fontSize="small" disabled={!dirty || isFetching}>
              Criar conta
            </Button>
          </Grid>
        </Form>
      )
    }}
  />
)

UserRegisterForm.propTypes = {
  createUserRequest: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ auth: { isFetching } }) => ({ isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserRegisterForm)
