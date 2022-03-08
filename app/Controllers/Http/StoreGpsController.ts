import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import Ws from "App/Services/Ws";

export default class StoreGpsController {
  public async store({request, response}: HttpContextContract) {
    const {latitude, longitude} = request.all()
    Ws.io.emit('gps', {lat: latitude, lon: longitude})
    return response.status(200).json({latitude, longitude})
  }
}
