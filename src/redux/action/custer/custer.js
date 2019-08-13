import { GET_CUSTERLIST } from '../type'
import { getCuster } from '@/api/custer/custer'
export const getcusterlist = (data) => (dispatch) => {
    getCuster(data).then(res => {
        if (res.status === 200 && res.data.code === '0') {
            dispatch({
                type: GET_CUSTERLIST,
                playload: res.data.result
            })
        }
    })
        .catch(err => {
            console.log(err)
        })
}