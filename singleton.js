var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.get = function () {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    };
    return Singleton;
}());
var a = Singleton.get();
var b = Singleton.get();
console.log(a === b);
