export const planetPopulation = (value) => {
    if (value >= 1000) {
        const suffixes = ["", "thousand", "million", "billion","trillion", "quadrillion"];
        const suffixNum = Math.floor( (""+value).length/3 );
        let shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum !== 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 !== 0)  shortValue = shortValue.toFixed(1);
        return  shortValue+" "+suffixes[suffixNum];
    }
    return value;
}