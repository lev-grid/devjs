# Задание №1
---
#### Формат данных для кусочного рекурсивного распределения
Входные данные для кусочного рекурсивного распределения представляются в виде массива, элементами которого являются отдельные куски:
```js
var obj = ['кусок 1', 'кусок 2', 'кусок 3', 'кусок 4', ...];
```
Каждый кусок представляется объектом в следующем виде:
```js
{
    "prob": Number,
    "name": String,
    "data": Object
}
```
Ключи объекта имеют следующие значения:
* `"prob"` -- вероятность (в процентах) данного куска распределения, число от `0` до `100`.
* `"name"` -- имя функции для данного куска распределения, принимаемые значения:
    * `"name": "disc"` -- дискретное
    * `"name": "ravn"` -- равномерное
    * `"name": "norm"` -- нормальное
    * `"name": "expo"` -- экспоненциальное
* `"data"` -- объект входных данных для данного куска распределения, зависит от значения в `"name"` и имеет следующий формат:
    * Для дискретного и равномерного распределения:
        ```js
        {
    		"min": Number,
    		"max": Number
    	}
        ```
        Где `"min"` -- левая граница интервала, а `"max"` -- правая. Частный случай (точка) достигается путём `"min" == "max"` и `"name": "disc"`.
    * Для нормального распределения:
        ```js
        {
			"mean": Number,
			"disp": Number,
    		"min": Number,
    		"max": Number
    	}
        ```
        Где `"mean"` -- центральное значение (математическое ожидание), `"disp"` -- дисперсия, `"min"` -- левая граница интервала и `"max"` -- правая.
    * Для экспоненциального распределения:
        ```js
        {
			"l": Number
    	}
        ```
        Где `"l"` -- лямбда (интенсивность, обратный коэффициент масштаба).
#### Использование

Подключение модуля:
```js
const mod = require('./module');
```
Использование функции:
```js
var res = mod.func(obj);
```
`obj` -- входные данные (объект кусочного рекурсивного распределения) в виде:
```json
[
	{
		"prob": 70,
		"name": "disc",
		"data":
		{
			"min": 0,
			"max": 0
		}
	},
	{
		"prob": 25,
		"name": "norm",
		"data":
		{
			"mean": 1,
			"disp": 0.3,
			"min": 0.5,
			"max": 1.5
		}
	},
	{
		"prob": 5,
		"name": "ravn",
		"data":
		{
			"min": 2,
			"max": 5
		}
	}
]
```
`res` -- результат работы программы (число).