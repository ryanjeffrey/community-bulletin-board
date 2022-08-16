import { getPost } from '../fetch-utils.js';
import { renderPostDetail } from '../render-utils.js';

const postDetailSection = document.getElementById('post-detail-section');

const params = new URLSearchParams(window.location.search);

// on load
async function loadData() {
    // get the id from URL
    const postId = params.get('id');
    // use the id to fetch the post
    const post = await getPost(postId);
    // render and append this post details to the container
    const postDetail = renderPostDetail(post);
    postDetailSection.append(postDetail);
}

loadData();
