export const OPEN_LIBRARY_CONFIG = {
    BASE_URL: 'https://openlibrary.org'
}

export const fetchBooks = async()=> {
    try {
        const response = await fetch(`${OPEN_LIBRARY_CONFIG.BASE_URL}/subjects/love.json`)
        if(!response.ok) throw new Error('Failed to books')
        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
        throw(error)
    }
}

export const fetchAuthors = async(works_key: string) =>  {

    try {
        const response = await fetch(`${OPEN_LIBRARY_CONFIG.BASE_URL}${works_key}.json`)
        if(!response.ok) throw new Error('Failed to get books')
        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
        throw(error)
    }
}


export const fetchAuthorDetails = async (authorKey: string) => {
    try {
        const response = await fetch(`${OPEN_LIBRARY_CONFIG.BASE_URL}${authorKey}.json`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching author details:", error);
    }
}

export const searchBooks = async ({query}: {query: string} ) => {
    try {
        const response = await fetch(`${OPEN_LIBRARY_CONFIG.BASE_URL}/search.json?q=${query}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error searching for books:", error);
    }
}

