import moment from 'moment';
import 'moment/dist/locale/pt-br';

moment.locale('pt-br');
const rawString = moment().format('dddd[, ]DD[ ]MMMM[, ]YYYY');
const DateTime = rawString.replace(/\b\w/g, (l) => l.toUpperCase());

export default DateTime;
