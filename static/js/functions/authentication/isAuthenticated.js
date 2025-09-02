export async function isAuthenticated() {

    const access = sessionStorage.getItem('access');
    if (access !== null) {

        const response = await fetch('/authentication/verify-jwt/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem(`access`)}`
              },
        }); 
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        else { return true; }
    }
    else { return false; }
}