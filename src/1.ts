import libDts from '../lib-dts/index'
import lib, { overLoaded } from '../lib/index'
import axios from 'axios'
// import koa from 'koa'

// 很多已经用js写好的库只有js文件(例如lib-dts/index.js)，首先搜索@types/xxx，如果没有
// 那自己写个d.ts文件(例如lib-dts/index.d.ts) 这个库才能改造为ts用
libDts.numberAdd(1, 3)
libDts.stringAdd('1', '3')

// 如果全新项目 直接写ts文件(例如lib/index.js)
lib.numberAddString(1, '3')
lib.anyAddString('1', '3')
// 接口
lib.register({ username: 'aa', password: 'bb' })
lib.updateUser({ userid: 2, username: 'cc', password: 'dd' })
// 重载 
overLoaded(1, '2')
// 泛型
const aaaa = lib.genericity(1, '2')
aaaa.push(1)
console.log(12)

// 重载泛型
interface User {
  id: number,
  name: string,
  email: string
}
function getUser<T>(type: 'username', data: string): Promise<T>
function getUser<T>(type: 'id', data: string): Promise<T>
async function getUser<T>(type: any, data: any) {
  // get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  // 返回值Promise<R>是泛型 下面定义的R是User 所以下面的返回值rs就会有id name email了
  return await axios.get<T>('user')
}
async () => {
  let rs = await getUser<User>('id', '1')
  return rs.id
}
