function valid(email) {
    const arroba = email.split('@').length-1;
    const arroba1 = email.indexOf('@');
    const ponto = email.indexOf ('.', arroba1);

    return arroba ===1 && ponto>arroba1 + 1;
}

console.log(valid("fortunatoa283@gmail.com"));