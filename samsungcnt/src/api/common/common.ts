import {CommoneResponse} from '@/@types/common/common';
import api from '@/utils/setAxios';

async function selectCommonList(): Promise<CommoneResponse[]>{
    const res = await api.get(`api 주소`)

    return res.data.result;
}


export {
    selectCommonList
}