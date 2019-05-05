import { createActions, createReducer } from 'reduxsauce'

/*
- Estado
- Cidade
- Tipo [Mais Baratos, Mais Caros, Mais Próximos] (Radio)
- Forma de Pagamento [Dinheiro, Débido, Crédito] (Checkbox)
- Escolha de combustível [Gasolina, Etanol, Gasolina Premium, Diesel S10, Diesel S500] (Aditivada?) (Checkbox)
===== Nosso App =====
- Range de preço (de 3,50 à 4,00, min e max)
- Nota por estrela (min e max)
- Tipo [Mais/Menos Favoritados, Mais/Menos Denunciados] (Radio)
*/

/*
  state
  city
  orderType [lowestPrice, highestPrice, lessBookmarked, mostBookmarked, lessComplained, mostComplained]
  paymentType [money, debit, credit] (array)
  fuelType [gasoline, ethanol, premiumGasoline, dieselS10, dieselS500] (array)
  minPrice
  maxPrice
  rating
*/

export const { Types, Creators } = createActions({
  gasStationsRequest: ['filter'],
  gasStationsSuccess: ['gasStations'],
  gasStationsFailure: null,
})

const INITIAL_STATE = {
  gasStations: [],
  isFetching: false,
}

const gasStationsRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  gasStations: [],
})
const gasStationsSuccess = (state = INITIAL_STATE, { gasStations }) => ({
  ...state,
  isFetching: false,
  gasStations,
})
const gasStationsFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})

export default createReducer(INITIAL_STATE, {
  [Types.GAS_STATIONS_REQUEST]: gasStationsRequest,
  [Types.GAS_STATIONS_SUCCESS]: gasStationsSuccess,
  [Types.GAS_STATIONS_FAILURE]: gasStationsFailure,
})
