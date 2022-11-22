export const responseFetchContents = async (url) => {
    const response = await fetch(typeof url  === 'string' ? url : false)
        .catch(err => console.warn(err));
    
    return response.json();
}