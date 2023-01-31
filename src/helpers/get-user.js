import {requestServerGet} from "@/api/request-server";
import {GET_USER} from "@/const/const.request-server";
import {TOKEN} from "@/const/const";

export async function getUser() {
    let user;
    const token = localStorage.getItem(TOKEN)
    if (token) await requestServerGet(GET_USER)
        .then((userCurrent) => {
            user = userCurrent;
        })
        .catch((err) => console.log(err.response.data))
    return user;
}