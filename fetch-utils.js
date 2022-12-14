const SUPABASE_URL = 'https://xexayazyxwoajshplpqh.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhleGF5YXp5eHdvYWpzaHBscHFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAzMjA0OTIsImV4cCI6MTk3NTg5NjQ5Mn0.u-0zS-Su3LEiijPIvrFXFcBTMPkQSfQ7NM-erIPDnGc';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export function checkAuth() {
    const user = getUser();
    if (!user) location.replace(`/auth/?redirectUrl=${encodeURIComponent(location)}`);
    return user;
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({ email, password });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({ email, password });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Helper for logging errors */

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}

/* Categories */

export async function getCategories() {
    const response = await client.from('categories').select('*');
    return checkError(response);
}

/* Posts */

export async function getPosts() {
    const response = await client.from('posts').select(`
        *,
        category:categories(*)
    `);
    return checkError(response);
}

export async function createPost(post) {
    return await client.from('posts').insert(post);
}


/* Users */

export async function getProfiles() {
    const response = await client.from('profiles').select('*');
    return checkError(response);
}

export async function getProfile(id) {
    const response = await client.from('profiles').select('*').match({ id }).single();
    return checkError(response);
}

export async function updateProfile(profile) {
    const response = await client.from('profiles').upsert(profile).single();
    return checkError(response);
}

export async function getPost(id) {
    const response = await client.from('posts').select('*').match({ id }).single();
    return checkError(response);
}

export async function deletePost(id) {
    const user = checkAuth();

    const response = await client.from('posts').delete().match({ id, user_id: user.id });
    return checkError(response);
}
