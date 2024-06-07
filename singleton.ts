class Singleton {
    static instance: Singleton

    private constructor() {
    }

    public static get(): Singleton {
        if (!this.instance) {
            this.instance = new Singleton()
        }
        return this.instance
    }
}

const a = Singleton.get()
const b = Singleton.get()
console.log(a === b)