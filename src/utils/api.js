export const fetchResults = async (url) => {
    const response = await fetch(url)
    //fetch only rejects on network failure or if something prevented the request from completing
    //so need to check if response.ok is true
    if (response.ok){
        return {success: true, results: await response.json()}
    } else {
        return {success: false, error: response.statusText}
    }
}