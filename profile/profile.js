import { updateProfile, getProfile, checkAuth } from '../fetch-utils.js';

const formEl = document.getElementById('profile-form');
const nameInput = formEl.querySelector('[name=name]');
const avatarInput = formEl.querySelector('[name=avatar]');
const bioInput = formEl.querySelector('[name=bio]');

const user = checkAuth();

const profile = {
    user_name: '',
    avatar_url: '',
    bio: ''
};

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    profile.user_name = data.get('name');
    profile.avatar_url = data.get('avatar');
    profile.bio = data.get('bio');

    await updateProfile(profile);

    formEl.reset();

    location.replace('../users');
});

async function displayProfile() {
    const profile = await getProfile(user.id);
    if (profile) {
        nameInput.value = profile.user_name;
        avatarInput.src = profile.avatar_url;
        bioInput.value = profile.bio;
    }
}

displayProfile();