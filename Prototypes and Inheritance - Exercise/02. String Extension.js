(function () {
    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? this.toString() : str + this;
    };

    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? this.toString() : this + str;
    };

    String.prototype.isEmpty = function () {
        return !this.toString();
    };

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return ".".repeat(n);
        }
        if (this.length <= n) {
            return this.toString();
        }

        if (this.includes(" ")) {
            let words = this.split(" ");
            let result = [];

            for (let word of words) {
                if (result.join(" ").length + word.length + 3 <= n) {
                    result.push(word);
                } else {
                    break;
                }
            }
            return result.join(" ") + "...";
        } else {
            return this.substring(0, n - 3) + "...";
        }
    };

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }
        return string;
    }

})();

let str = 'my string';

console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(9));
console.log(str = str.truncate(6));
console.log(str = String.format('The {0} {1} fox', 'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}', 'dog'));