import axios from "axios";
import { BASE_URL } from "../../config";
import store from "../store";
import { incrementPage, quizFailure, quizRequest, quizSuccess, setCurrentPage, setHasMore, setTotalPage } from "../reducers/quizReducer";

export const getQuiz = async () => {
    const { data, page } = store.getState().quiz;
    store.dispatch(quizRequest());
    try {
        const res = await axios.get(`${BASE_URL}/api/v1/quiz/get?page=${page}&limit=${10}&search=`);

        store.dispatch(incrementPage());
        store.dispatch(setTotalPage(res.data.totalPages));
        store.dispatch(setCurrentPage(res.data.page));
        const quizData = await {
            key: res.data.page,
            value: res.data.data
        }

        store.dispatch(quizSuccess(quizData));
        if (res.data.totalPages <= page) {
            store.dispatch(setHasMore());
        }

    } catch (error) {
        store.dispatch(quizFailure(error.message));
        console.log(error)
    }
}