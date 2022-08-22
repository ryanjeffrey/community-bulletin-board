import { getProfiles } from '../fetch-utils.js';
import { renderProfile } from '../render-utils.js';

const usersSectionEl = document.getElementById('users-section');

async function displayAllUsers() {
    const users = await getProfiles();
    for (let user of users) {
        usersSectionEl.append(renderProfile(user));
    }
}

displayAllUsers();