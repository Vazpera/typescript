import { isVec3 } from "../interfaces/vec3";

export class Vec3 implements isVec3 {
    e: [number, number, number];
    constructor(x: number, y: number, z: number) {
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
    set x(i: number) {
        this.e[0] = i;
    }
    set y(i: number) {
        this.e[1] = i;
    }
    set z(i: number) {
        this.e[2] = i;
    }
    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }
    get normalized() {
        let len = this.length;
        return new Vec3(this.x / len, this.y / len, this.z / len);
    }
    add(i: Vec3) {
        return new Vec3(
            this.e[0] + i.e[0],
            this.e[1] + i.e[1],
            this.e[2] + i.e[2]
        );
    }
    sub(i: Vec3) {
        return new Vec3(
            this.e[0] - i.e[0],
            this.e[1] - i.e[1],
            this.e[2] - i.e[2]
        );
    }
    blend(i: Vec3) {
        return new Vec3(
            this.e[0] * i.e[0],
            this.e[1] * i.e[1],
            this.e[2] * i.e[2]
        );
    }
    mul(i: number) {
        return new Vec3(this.e[0] * i, this.e[1] * i, this.e[2] * i);
    }
    div(i: number) {
        return new Vec3(this.e[0] / i, this.e[1] / i, this.e[2] / i);
    }
}
