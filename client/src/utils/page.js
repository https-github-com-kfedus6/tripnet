export const getPageCount = (totalCount) => {
    return Math.ceil(Number(totalCount) / 10)
}

export const getPagesArray = (totalCount) => {
    let result = []
    for (let i = 0; i < totalCount; i++) {
        result.push(i + 1)
    }
    return result
}