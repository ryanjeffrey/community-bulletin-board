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
        const li = document.createElement('li');
        li.classList.add('post-it');

        const titleEl = document.createElement('h2');
        titleEl.textContent = post.title;

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

        fragment.append(li);
    }

    return fragment;
}

export function renderProfile(user) {
    const userAnchor = document.createElement('a');
    userAnchor.classList.add('user-anchor');

    const avatar = document.createElement('img');
    avatar.src = '/assets/avatar-placeholder-circle.png';

    const userName = document.createElement('span');
    userName.textContent = `${user.name}`;

    const bio = document.createElement('p');
    bio.textContent = `${user.bio}`;

    userAnchor.append(avatar, userName, bio);

    return userAnchor;
}