"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Size = exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["Ordered"] = 0] = "Ordered";
    Status[Status["Baked"] = 1] = "Baked";
    Status[Status["Sold"] = 2] = "Sold";
})(Status || (exports.Status = Status = {}));
var Size;
(function (Size) {
    Size["small"] = "small";
    Size["medium"] = "medium";
    Size["large"] = "large";
})(Size || (exports.Size = Size = {}));
