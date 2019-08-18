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
const RegisterPage = lazy(() => import('@pages/RegisterPage/index'))
const NotFoundPage = lazy(() => import('@pages/NotFoundPage/index'))
// User pages
const UserBookmarks = lazy(() => import('@pages/UserBookmarks/index'))
const UserRatings = lazy(() => import('@pages/UserRatings/index'))
const UserEdit = lazy(() => import('@pages/UserEdit/index'))
// Gas Station pages
const GasStationHomePage = lazy(() => import('@pages/GasStationHomePage/index'))
const GasStationCreatePriceFuel = lazy(() => import('@pages/GasStationCreatePriceFuel/index'))
const GasStationEditPriceFuel = lazy(() => import('@pages/GasStationEditPriceFuel/index'))
// Admin pages
const AdminListGasStations = lazy(() => import('@pages/AdminListGasStations/index'))
const AdminComplaints = lazy(() => import('@pages/AdminComplaints/index'))
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
          <PublicRouter path="/login" exact component={props => <LoginPage {...props} />} />
          <PublicRouter path="/register" exact component={props => <RegisterPage {...props} />} />

          <UserRouter path="/user/bookmarks" exact component={props => <UserBookmarks {...props} />} />
          <UserRouter path="/user/ratings" exact component={props => <UserRatings {...props} />} />
          <UserRouter path="/user/edit" exact component={props => <UserEdit {...props} />} />

          <GasStationRouter path="/gas-station" exact component={props => <GasStationHomePage {...props} />} />
          <GasStationRouter path="/gas-station/price-fuel" exact component={props => <GasStationCreatePriceFuel {...props} />} />
          <GasStationRouter path="/gas-station/price-fuel/:priceFuelID" exact component={props => <GasStationEditPriceFuel {...props} />} />

          <AdminRouter path="/admin" exact component={props => <AdminListGasStations {...props} />} />
          <AdminRouter path="/admin/complaints" exact component={props => <AdminComplaints {...props} />} />
          <AdminRouter path="/admin/gas-stations" exact component={props => <AdminCreateGasStations {...props} />} />
          <AdminRouter path="/admin/gas-stations/:gasStationID" exact component={props => <AdminEditGasStations {...props} />} />
          <AdminRouter path="/admin/gas-stations/:gasStationID/price-historic" exact component={props => <AdminGasStationPriceHistoric {...props} />} />

          <Route path="*" component={props => <NotFoundPage {...props} />} />
        </Switch>
      </Suspense>
    </>
  </ThemeProvider>
)

export default App
