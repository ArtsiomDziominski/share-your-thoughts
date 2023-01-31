import axios from "axios";
import {TOKEN} from "@/const/const";
import {BURL, HEADER_CONTENT_TYPE} from "@/const/const.request-server";

export async function requestServerGet(bodyUrl) {
    const token = localStorage.getItem(TOKEN);
    return axios.get(BURL + bodyUrl, {
        headers: {
            'Content-Type': HEADER_CONTENT_TYPE,
            'Authorization': 'Bearer ' + token
        }
    })
}

export async function requestServerPost(bodyUrl, bodyPost) {
    const token = localStorage.getItem(TOKEN);
    return axios.post(BURL + bodyUrl, bodyPost, {
        headers: {
            'Content-Type': HEADER_CONTENT_TYPE,
            'Authorization': 'Bearer ' + token
        }
    })
}