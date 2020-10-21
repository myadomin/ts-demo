// 类型
type ns = number | string
// 接口
interface User {
  username: string,
  password: string
}
// 接口继承
interface UpdateUser extends User {
  userid: number
}
// 重载 最后一个实现的函数参数类型必须包括被重载函数参数类型(any 包括string和number)
// 调用overLoaded的参数必须任意一个是string另一个是number
export function overLoaded (x: string, y: number): number
export function overLoaded (x: number, y: string): number
export function overLoaded (x: any, y: any): number {
  return 1
}

export default {
  numberAddString (x: number, y: string): string {
    return x + y
  },
  anyAddString (x: ns, y: string): string {
    return x + y
  },
  register (data: User): number {
    return 1
  },
  updateUser (data: UpdateUser): number {
    return 1
  },
  // 泛型 假如调用的时候是 const a = lib.genericity(1, '2') 所以N对应的是number类型 S对应的是string类型
  // 那么返回的就是new Array(number)()，返回值如果push就只能push number
  genericity <N, S> (a: N, b?: S): Array<N> {
    return new Array<N>()
  }
}
