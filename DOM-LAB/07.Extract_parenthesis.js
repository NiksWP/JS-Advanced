function extract(elementId) {
    let contentElement = document.getElementById(elementId);
    const patter = /\(([^\(\)]+)\)/g;
    const matches = contentElement.textContent.matchAll(patter);

    const result = Array.from(matches).map(match => match[1]).join("; ")

    return result;
}