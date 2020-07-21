class A {
    easeinout = (n) => {
        if (n === 1) {
            return 1;
        }
        if (n === 0) {
            return 0;
        }
        var q = .48 - n / 1.04
        var Q = Math.sqrt(.1734 + q * q)
        var x = Q - q
        var X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1)
        var y = -Q - q
        var Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1)
        var t = X + Y + .5
        return (1 - t) * 3 * t * t + t * t * t
    }
}
    
