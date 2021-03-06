import OpenApiSwagger           from 'swagger-client'

import {
  SWGCTL2_CONNECT_REQUEST,
  SWGCTL2_CONNECT_SUCCESS
} from '../constants/swgControlConst2'

export function swgConnectAct(specUrl) {
  
  return (dispatch) => {
    // try
    dispatch({
      type: SWGCTL2_CONNECT_REQUEST,
      payload: {'swgClient': {}}
    })

    OpenApiSwagger(specUrl)
      .then(
        (client) => {
          // --------------------------------------------------------
          // Swagger API connected
          // --------------------------------------------------------
          dispatch({
            type: SWGCTL2_CONNECT_SUCCESS,
            payload: {'swgClient': client}
          })

          // --------------------------------------------------------
          // Стартовые запросы у компонент после получения swgClient
          // --------------------------------------------------------
          //let token = window.localStorage.getItem('token')
          //dispatch(authActions.clientUserDataGet(client, token))
          
        }
      )
      .catch(
        (err) => {
          // err
          console.log(err)
        }
      )

  }
}
