import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function dateFormat(date) {
  if (date) {
    const newDate = new Date(date)

    const dateFormated = format(newDate,"dd 'de' MMM. 'de' yyyy", {locale: ptBR})

    return dateFormated
  }
}