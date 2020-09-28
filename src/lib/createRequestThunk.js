import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestThunk(type, request) {
  // 성공, 실패 action type 정의
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch({ type }); // 시작
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      // 성공
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (err) {
      // 실패
      dispatch({
        type: FAILURE,
        payload: err,
        error: true,
      });
      dispatch(startLoading(type));
      throw err;
    }
  };
}

// 사용법: createRequestThunk('GET_USERS', api.getUsers)
