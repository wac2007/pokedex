import moment from 'moment'

export default function momentFilter (dateString, format = 'MM/DD/YYYY HH:mm:ss') {
  return moment(dateString).format(format)
}
