const seededRandom = function (seed) {
    const m = 2**35 - 31;
    const a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    var result = [];
    if (!date) return result;
    const random = seededRandom(Date.parse(date));

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) result.push(i + ':00');
        if(random() < 0.5) result.push(i + ':30');
    }
    return result;
};

export const submitAPI = function(formData) {
    return true;
};
