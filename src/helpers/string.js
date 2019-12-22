const addPeriods = value => value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

export const formatToFuelPrice = value => `R$ ${addPeriods(Number(value).toFixed(3).replace('.', ','))}`
