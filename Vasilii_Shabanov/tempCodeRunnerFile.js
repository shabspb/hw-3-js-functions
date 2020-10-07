function countDown(num) {
    return setInterval(function () {
        if (num < 0) clearInterval();
        else {
            console.log(num);
            num--;
        }
    }, 1000);
}

console.log(countDown(3)); // 3, 2, 1, 0