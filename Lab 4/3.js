document.write(`<div><table>`)

document.write(`<tr>`)
document.write(`<th>n</th>`)
document.write(`<th>n<sup>2</sup></th>`)
document.write(`<th>n<sup>3</sup></th>`)
document.write(`</tr>`)

for (let i = 1; i <= 10; i++) {
    document.write(`<tr>`)
    document.write(`<td>${i}</td>`)
    document.write(`<td>${i ** 2}</td>`)
    document.write(`<td>${i ** 3}</td>`)
    document.write(`</tr>`)
}

document.write(`</table></div>`)
