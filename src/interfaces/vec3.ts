export interface isVec3 {
    e: [number, number, number];
    /* Getters */
    get x(): number;
    get y(): number;
    get z(): number;
    get normalized(): isVec3;
    get length(): number;
    /* Setters */
    set x(i: number);
    set y(i: number);
    set z(i: number);
    /* Methods */
    mul(i: number): isVec3;
    div(i: number): isVec3;
    add(i: isVec3): isVec3;
    sub(i: isVec3): isVec3;
    blend(i: isVec3): isVec3;
}
