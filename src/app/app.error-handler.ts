import { Observable } from 'rxjs/Observable'
import { Response } from '@angular/http'

class ErrorHandler {
  static handleError (error : Response| any) {
    let errorMessage: string

    if (error instanceof Response) {
      errorMessage = `[ERROR] - Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
    } else {
      errorMessage = error.toString()
    }

    console.log(`%c ERRORRR ${errorMessage}! `,
      'background: #ffcccc; color: #000')

    return Observable.throw(errorMessage)
  }
}

export default ErrorHandler
