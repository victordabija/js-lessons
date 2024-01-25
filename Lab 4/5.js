document.write(`<table>`)

for (let i = 1; i <= 8; i++) {
    document.write(`<tr>`);
    for (let j = 1; j <= 8; j++) {
        const className = (i + j) % 2 === 0 ? 'alb' : 'negru';

        document.write(`<td class="${className}"></td>`);
    }
    document.write(`</tr>`);
}

document.write(`</table>`);