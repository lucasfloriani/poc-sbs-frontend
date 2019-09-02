import { DateTime } from 'luxon'

export const formatTimezoneToSystem = timezone => DateTime
  .fromString(timezone, 'dd/MM/yyyy HH:mm:ss')
  .toFormat('yyyy-MM-dd TT ZZZ')

export const formatTimezone = timezone => DateTime.fromSQL(timezone).toFormat('dd/MM/yyyy TT')

export const formatDateToSystem = date => DateTime.fromISO(date).toFormat('dd/MM/yyyy')

export const formatDate = date => DateTime.fromISO(date).toFormat('dd/MM/yyyy')

export const getCurrentYear = () => DateTime.local().year

export const copyrightTimeMessage = year => year === getCurrentYear() ? `${year}` : `${year} - ${getCurrentYear()}`
