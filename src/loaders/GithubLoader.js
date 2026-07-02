
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/malikzain3');
    return response.json()
}
