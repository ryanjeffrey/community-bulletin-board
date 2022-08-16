export function renderCategoryOptions(categories) {
    // document fragment is a "bag" for elements
    const fragment = document.createDocumentFragment();

    for (const category of categories) {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = `${category.emoji} ${category.name}`;
        fragment.append(option);
    }

    return fragment;
}

export function renderPosts(posts) {
    const fragment = document.createDocumentFragment();

    for (const post of posts) {
        const a = document.createElement('a');
        const li = document.createElement('li');
        li.classList.add('post-it');

        const titleEl = document.createElement('h2');
        titleEl.textContent = post.title;

        a.href = `./post/?id=${post.id}`;

        const categoryEl = document.createElement('span');
        categoryEl.classList.add('category');
        categoryEl.title = post.category.name;
        categoryEl.textContent = post.category.emoji;

        const descriptionEl = document.createElement('p');
        descriptionEl.classList.add('description');
        descriptionEl.textContent = post.description;

        const contactEl = document.createElement('p');
        contactEl.textContent = post.contact;

        li.append(titleEl, categoryEl, descriptionEl, contactEl);

        a.append(li);
        fragment.append(a);
    }

    return fragment;
}

export function renderPostDetail(post) {
    const postDetailDiv = document.createElement('div');

    const titleAndButtonDiv = document.createElement('div');
    const titleDiv = document.createElement('h2');
    const deletePostButton = document.createElement('button');

    const postEmoji = document.createElement('p');
    const postDate = document.createElement('p');
    const postDescription = document.createElement('p');
    const postContact = document.createElement('p');

    titleDiv.textContent = post.title;
    deletePostButton.textContent = 'Delete';
    postDescription.textContent = post.description;
    postContact.textContent = post.contact;

    const event = new Date(post.created_at);
    postDate.textContent = `Posted: ${event.toDateString()}`;

    postDetailDiv.classList.add('post-it-detail');
    titleAndButtonDiv.classList.add('title-and-button');
    postDate.classList.add('post-date');

    titleAndButtonDiv.append(titleDiv, deletePostButton);

    postDetailDiv.append(titleAndButtonDiv, postEmoji, postDate, postDescription, postContact);

    return postDetailDiv;
}