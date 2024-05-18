/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<TKey, TValue> {
	key: TKey;
	value: TValue;
}

const pair: KeyValuePair<string, number> = {
	key: "id",
	value: 2,
};
console.log(pair);
export {};
