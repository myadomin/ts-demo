"use strict";
exports.__esModule = true;
exports.overLoaded = void 0;
function overLoaded(x, y) {
    return 1;
}
exports.overLoaded = overLoaded;
exports["default"] = {
    numberAddString: function (x, y) {
        return x + y;
    },
    anyAddString: function (x, y) {
        return x + y;
    },
    register: function (data) {
        return 1;
    },
    updateUser: function (data) {
        return 1;
    },
    // 泛型 假如调用的时候是 const a = lib.genericity(1, '2') 所以N对应的是number类型 S对应的是string类型
    // 那么返回的就是new Array(number)()，返回值如果push就只能push number
    genericity: function (a, b) {
        return new Array();
    }
};
