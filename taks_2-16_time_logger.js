// Функция-конструктор для подсчета времени выполнения кода
function Logger() {
    this.startTime = 0;
    this.endTime = 0;
    this.result = 0;

    this.start = function () {
        this.startTime = Date.now();
    };
    this.end = function () {
        this.endTime = Date.now();
        this.result = this.endTime - this.startTime;
    };
}

const logger = new Logger(); // создаем новый логгер из конструктора

logger.start(); // фиксируем время начала выполнения кода

// в качестве "долгого кода" была выбрана рекурсивная функция для поиска числа Фибоначчи, неоптимальный медленный алгоритм)
function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
console.log('Число Фибоначчи: ' + fib(35)); // Получаем n-ое число в последовательности Фибоначчи (чем большее число ищем, тем дольше будет выполняться код)

logger.end(); // фиксируем время окончания выполнения кода, подсчет разницы и фиксация результата

console.log(`Время выполнения: ${logger.result} миллисекунд`); // выводим результат подсчета времени выполнения кода
