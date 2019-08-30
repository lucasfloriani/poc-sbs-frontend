import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from '@theme'
import ToastContainer from '@molecules/ToastContainer'
import UserRouter from '@molecules/UserRouter'
import GasStationRouter from '@molecules/GasStationRouter'
import AdminRouter from '@molecules/AdminRouter'
import PublicRouter from '@molecules/PublicRouter'
import { ScreenLoader } from './index'

/**
 * ===== Páginas sem login =====
 * - Home page com login do usuário e posto de gasolina junto com cadastro de usuário
 * - Página oculta para o login do administrador
 *
 * ===== Páginas do usuário =====
 * - Home page do usuário com filtro de cidade, estado, tipo de pagamento, tipo de gasolina, nome do posto, etc com o mapa abaixo dele
 * - Listagem dos postos com filtro com visualização individual do mesmo
 * - CRUD dos favoritos
 * - CRUD das denúncias
 * - CRUD dos dados da conta
 *
 * ===== Páginas do posto de gasolina =====
 * - Home page com a listagem dos valores de gasolina e tipos de pagamento do posto (CRUD)
 * - Página pra edição dos dados do usuário
 *
 * ===== Páginas do administrador =====
 * - Dashboard com alguns gráficos
 * - CRUD dos postos de gasolina
 */
const HomePage = lazy(() => import('@pages/HomePage/index'))
const LoginPage = lazy(() => import('@pages/LoginPage/index'))
const RegisterUserPage = lazy(() => import('@pages/RegisterUserPage/index'))
const RegisterGasStationPage = lazy(() => import('@pages/RegisterGasStationPage/index'))
const NotFoundPage = lazy(() => import('@pages/NotFoundPage/index'))
// User pages
const UserAboutUs = lazy(() => import('@pages/UserAboutUs/index'))
const UserBookmarks = lazy(() => import('@pages/UserBookmarks/index'))
const UserRatings = lazy(() => import('@pages/UserRatings/index'))
const UserEdit = lazy(() => import('@pages/UserEdit/index'))
// Gas Station pages
const GasStationAboutUs = lazy(() => import('@pages/GasStationAboutUs/index'))
const GasStationHomePage = lazy(() => import('@pages/GasStationHomePage/index'))
const GasStationCreatePriceFuel = lazy(() => import('@pages/GasStationCreatePriceFuel/index'))
const GasStationEditPriceFuel = lazy(() => import('@pages/GasStationEditPriceFuel/index'))
// Admin pages
const AdminAboutUs = lazy(() => import('@pages/AdminAboutUs/index'))
const AdminListGasStations = lazy(() => import('@pages/AdminListGasStations/index'))
const AdminComplaints = lazy(() => import('@pages/AdminComplaints/index'))
const AdminRelatories = lazy(() => import('@pages/AdminRelatories/index'))
const AdminCreateGasStations = lazy(() => import('@pages/AdminCreateGasStations/index'))
const AdminEditGasStations = lazy(() => import('@pages/AdminEditGasStations/index'))
const AdminGasStationPriceHistoric = lazy(() => import('@pages/AdminGasStationPriceHistoric/index'))

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <ToastContainer />
      <Suspense fallback={<ScreenLoader />}>
        <Switch>
          <Route path="/" exact component={props => <HomePage {...props} />} />
          <Route path="/about-us" exact component={props => <UserAboutUs {...props} />} />
          <PublicRouter path="/login" exact component={props => <LoginPage {...props} />} />
          <PublicRouter path="/register/user" exact component={props => <RegisterUserPage {...props} />} />
          <PublicRouter path="/register/gas-station" exact component={props => <RegisterGasStationPage {...props} />} />

          <UserRouter path="/user/bookmarks" exact component={props => <UserBookmarks {...props} />} />
          <UserRouter path="/user/ratings" exact component={props => <UserRatings {...props} />} />
          <UserRouter path="/user/edit" exact component={props => <UserEdit {...props} />} />

          <GasStationRouter path="/gas-station" exact component={props => <GasStationHomePage {...props} />} />
          <GasStationRouter path="/gas-station/about-us" exact component={props => <GasStationAboutUs {...props} />} />
          <GasStationRouter path="/gas-station/price-fuel" exact component={props => <GasStationCreatePriceFuel {...props} />} />
          <GasStationRouter path="/gas-station/price-fuel/:priceFuelID" exact component={props => <GasStationEditPriceFuel {...props} />} />

          <AdminRouter path="/admin" exact component={props => <AdminListGasStations {...props} />} />
          <AdminRouter path="/admin/about-us" exact component={props => <AdminAboutUs {...props} />} />
          <AdminRouter path="/admin/complaints" exact component={props => <AdminComplaints {...props} />} />
          <AdminRouter path="/admin/gas-stations" exact component={props => <AdminCreateGasStations {...props} />} />
          <AdminRouter path="/admin/gas-stations/:gasStationID" exact component={props => <AdminEditGasStations {...props} />} />
          <AdminRouter path="/admin/gas-stations/:gasStationID/price-historic" exact component={props => <AdminGasStationPriceHistoric {...props} />} />
          <AdminRouter path="/admin/relatories" exact component={props => <AdminRelatories {...props} />} />

          <Route path="*" component={props => <NotFoundPage {...props} />} />
        </Switch>
      </Suspense>
    </>
  </ThemeProvider>
)

export default App
