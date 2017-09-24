function convertCharacters(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/\//g, '&#x2F;')
        .replace(/`/g, '&#96');
}


function filter(str, avalibleHtmlTags = []) {
    return str
        .replace(/([^>]+)(?![^<]*>|[^<>]*<\/)/g, convertCharacters)
        .replace(new RegExp(`<((?!${avalibleHtmlTags.join('|')})\\w+)[\\s\\S]+\\1>`, 'gi'), convertCharacters)
        .replace(new RegExp(`<(?!${avalibleHtmlTags.join('|')}|\/)[\\s\\S]+?>`, 'gi'), convertCharacters);
}