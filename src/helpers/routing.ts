export function getQueryParam(query: string | string[]) {
    return Array.isArray(query) ? query[0] : query;
}
