interface Point {
  x: number;
  y: number;
}
export let drawPoint = (point: Point) => {
  console.log({x: point.x, y: point.y});
};

drawPoint({x: 105, y: 24});

export let getDistance = (a: Point, b: Point) => {
  // ...
};

// class
interface IPoint {
  x: number;
  y: number;
  drawPoint: () => void;
  getDistances: (p: IPoint) => number;
}
class Point implements IPoint {
  constructor(private x: number, private y: number) {
    // this.x = x;
    // this.y = y;
  }
  drawPoint = () => {
    console.log('x: ', this.x, 'y: ', this.y);
  };
  getDistances = (p: IPoint) => {
    return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2);
  };
}
// 访问修饰符 Access Modifier public privte protected
const point = new Point(1, 2);

point.drawPoint();

// Generics 泛型：相当于数据的模板
let lastInArray = <T>(arr: T[]) => {
  return arr[arr.length - 1];
};
const l1 = lastInArray([1, 2, 3, 4]);
const l2 = lastInArray(['a', 'b', 'c', 'd']);

let makeTuple = <T, Y = number>(x: T, y: Y) => [x, y];
const v1 = makeTuple(1, 'one');
