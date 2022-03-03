/**
 * Project name(项目名称)：JS_function
 * File name(文件名): test4
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/3
 * Time(创建时间)： 13:15
 * Version(版本): 1.0
 * Description(描述)： 无
 */

function division(dividend, divisor)
{
    var quotient = dividend / divisor;
    var arr = [dividend, divisor, quotient]
    return arr;
}

var res = division(100, 4)
document.write(res[0]);         // 输出：100
document.write(res[1]);         // 输出：4
document.write(res[2]);         // 输出：25