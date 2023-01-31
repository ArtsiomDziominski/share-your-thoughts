import {requestServerGet} from "@/api/request-server";
import {formatDate} from "@/helpers/format-date";
import {GET_ALL_POSTS} from "@/const/const.request-server";

export async function getAllPost() {
    let allPosts;
    await requestServerGet(GET_ALL_POSTS)
        .then((result) => {
            allPosts = result.data;
            allPosts.forEach((post, index) => {
                allPosts[index].description = post.description.length >= 100 ? post.description.slice(0, 100) + '...' : post.description;
                allPosts[index].createdAt = formatDate(allPosts[index].createdAt);
                allPosts[index].updatedAt = formatDate(allPosts[index].updatedAt);
            })
            allPosts.reverse();
        })
        .catch((err) => console.log(err))
    return allPosts;
}