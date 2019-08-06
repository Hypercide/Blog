# Redis

## Redis与Memcached
1. `Redis`可以用来做存储`(storge)`, 而`Memcached`是用来做缓存`(cache)`，这个特点主要因为其有”持久化”的功能.
2. 存储的数据类型不同,对于`Memcached`来说,存储的数据,只有1种类型--”字符串”,而`Redis`则可以存储`字符串`,`链表`,`哈希结构`,`集合`,`有序集合`.

## 查询key
在Redis里,允许模糊查询`key`,
有3个通配符 `*`, `?` ,`[]`

- `*` 通配任意多个字符
- `?` 通配单个字符
- `[]` 通配括号内的某1个字符
```powershell
redis 127.0.0.1:6379> flushdb
OK
redis 127.0.0.1:6379> keys *
(empty list or set)
redis 127.0.0.1:6379> mset one 1 two 2 three 3 four 4
OK
redis 127.0.0.1:6379> keys o*
1) "one"
redis 127.0.0.1:6379> keys *o
1) "two"
redis 127.0.0.1:6379> keys ???
1) "one"
2) "two"
redis 127.0.0.1:6379> keys on?
1) "one"
redis 127.0.0.1:6379> set ons yes
OK
redis 127.0.0.1:6379> keys on[eaw]
1)"one"
```

## 字符串类型的相关命令

>set设置键值
```
set key value
```
>mset设置多个键值
```
mset key1 val1 key2 val2
```
>get获取键值
```
get key
```
>mget获取多个键值
```
mget key1 key2
```
>append追加字符
```
append key value

把value追加到key的原值上
```
>getrange获取字符里一个范围的值
```
getrange key start stop

获取字符串中 [start, stop]范围的值
对于字符串的下标,左数从0开始,右数从-1开始

注意: 
1: start>=length, 则返回空字符串
2: stop>=length,则截取至字符结尾
3: 如果start 所处位置在stop右边, 返回空字符串
```
```powershell
redis 127.0.0.1:6379> set title 'chinese'
OK
redis 127.0.0.1:6379> getrange title 0 3
"chin"
redis 127.0.0.1:6379> getrange title 1 -2
"hines"
```
>getset返回旧值并设置新值
```
getset key newvalue
```
```powershell
redis 127.0.0.1:6379> set cnt 0
OK
redis 127.0.0.1:6379> getset cnt 1
"0"
redis 127.0.0.1:6379> getset cnt 2
"1"
```
>incr/decr给键值加/减一
```
incr/decr key

指定的key的值加/减1,并返回加/减1后的值
```
>incrby/decrby给键值值加/减
```
incrby key number

指定的key的值加/减number,并返回加/减number后的值
```

## 集合set的相关命令
集合的性质: `唯一性`,`无序性`,`确定性`
::: tip 注:
在`string`和`link`的结构中,可以通过`range`来访问`string`中的某几个字符或某几个元素,但因为集合的无序性,无法通过下标或范围来访问部分元素.
:::