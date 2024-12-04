"use strict";
var Size;
(function (Size) {
    Size["S"] = "S";
    Size["M"] = "M";
    Size["L"] = "L";
    Size["XL"] = "XL";
})(Size || (Size = {}));
let product = {
    id: "c001",
    name: "코드잇 블랙 후디",
    price: 129000,
    sizes: [Size.S, Size.M, Size.XL],
};
function findProduct(size) {
    if (!size) {
        console.log("전체 사이즈로 검색");
        return;
    }
    console.log("특정 사이즈로 검색");
}
findProduct(Size.S);
findProduct(Size.L);
findProduct();
