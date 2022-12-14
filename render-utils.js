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

export function renderProfile(user) {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-div');

    const avatar = document.createElement('img');
    avatar.src = '/assets/avatar-placeholder-circle.png';

    const nameAndBioDiv = document.createElement('div');
    nameAndBioDiv.classList.add('name-and-bio');

    const userName = document.createElement('span');
    userName.textContent = `${user.user_name}`;

    const bio = document.createElement('p');
    bio.textContent = `${user.bio}`;

    nameAndBioDiv.append(userName, bio);

    userDiv.append(avatar, nameAndBioDiv);

    return userDiv;
}

export function renderPostDetail(post) {
    const postDetailDiv = document.createElement('div');

    const titleDiv = document.createElement('h2');
    
    const postEmoji = document.createElement('p');
    const postDate = document.createElement('p');
    const postDescription = document.createElement('p');
    const postContact = document.createElement('p');

    titleDiv.textContent = post.title;
    postDescription.textContent = post.description;
    postContact.textContent = post.contact;

    const event = new Date(post.created_at);
    postDate.textContent = `Posted: ${event.toDateString()}`;

    postDetailDiv.classList.add('post-it-detail');
    postDate.classList.add('post-date');

    postDetailDiv.append(titleDiv, postEmoji, postDate, postDescription, postContact);

    return postDetailDiv;
}