"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vec3 = void 0;
class Vec3 {
    e;
    constructor(x, y, z) {
        this.e = [x, y, z];
    }
    get x() {
        return this.e[0];
    }
    get y() {
        return this.e[1];
    }
    get z() {
        return this.e[2];
    }
    set x(i) {
        this.e[0] = i;
    }
    set y(i) {
        this.e[1] = i;
    }
    set z(i) {
        this.e[2] = i;
    }
    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }
    get normalized() {
        let len = this.length;
        return new Vec3(this.x / len, this.y / len, this.z / len);
    }
    add(i) {
        return new Vec3(this.e[0] + i.e[0], this.e[1] + i.e[1], this.e[2] + i.e[2]);
    }
    sub(i) {
        return new Vec3(this.e[0] - i.e[0], this.e[1] - i.e[1], this.e[2] - i.e[2]);
    }
    blend(i) {
        return new Vec3(this.e[0] * i.e[0], this.e[1] * i.e[1], this.e[2] * i.e[2]);
    }
    mul(i) {
        return new Vec3(this.e[0] * i, this.e[1] * i, this.e[2] * i);
    }
    div(i) {
        return new Vec3(this.e[0] / i, this.e[1] / i, this.e[2] / i);
    }
}
exports.Vec3 = Vec3;
