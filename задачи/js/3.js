const path = "/users/download/index.html";

const isHtml = path => {
    const string = '.html';
    const clipped = path.slice(-5);

    return string==clipped
}


console.log(isHtml(path))

