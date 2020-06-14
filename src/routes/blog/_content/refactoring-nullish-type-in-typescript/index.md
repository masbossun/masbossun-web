---
title: Refactoring nullish type in Typescript
slug: refactoring-nullish-type-in-typescript
date: "2020-06-12T12:45:43.413Z"
gitrepo: "https://github.com/masbossun/masbossun-web/blob/master/src/routes/blog/\_content/hello-world/index.md"
---

Keep Safe!

<p style="width: 100%; font-size:80%; text-align:center;">
<img src="ambitious-creative-co-rick-barrett-uYD-WRJaFS8-unsplash.jpg" alt="Unsplash Photo" width="100%" style="padding-bottom:0.5em;" /><a href="https://unsplash.com/@weareambitious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Photo by Ambitious Creative Co. - Rick Barrett on Unsplash</a></p>

On javascript we have two different nullish type which is `null` and `undefined`. These types basically have same meaning that value with these types doesn't contain anything or empty, but these two types have different behavior, maybe you can find the differences between these nullish type in somewhere else in the internet. My point is, when dealing with nullish type (especially on typescript), we need to handle all the variables to have something kind of fallback. For example,

```typescript
const response = {
	id: 2,
	status: 'OK',
	message: 'All is well',
	data: {
		name: 'Abigail',
		phone: 85123123123,
	}
};

const getUserPhoneNumber = (data) => {
	return data.phone;
}

getUserPhoneNumber(response.data); // 85123123123
```

On the code snippet above, we know that every response should returned with `id`, `status`, `message`, and `data`. Also on the `getUserPhoneNumber()` we pass `data` from `response` object and return the user phone number from that. All clear, but how if we don't know if the data is actually **always** exist.

Ok, now just assume we know the `response.data` is not always exists by checking the response from backend side or by using tools like [Apollo Codegen](https://github.com/apollographql/apollo-tooling#apollo-clientcodegen-output) (it can generate Typescript definitions if you are using graphql).

```typescript
interface ReponseDataType {
	name: string
	phone: number
};

interface ResponseType {
	id: number
	status: string
	data: ResponseDataType | null | undefined
};

const response: ResponseType = {
	id: 2,
	status: 'OK',
	message: 'All is well',
	data: {
		name: 'Abigail',
		phone: 85123123123,
	}
};

const getUserPhoneNumber = (data: ResponseDataType) => {
	return data.phone;
};

getUserPhoneNumber(response.data); // 85123123123
```

After we add type definitions, when we call `getUserPhoneNumber(response.data)`, typescript will tell us that `response.data` can be `undefined`, to fix this, we need to add nullish type inside function parameter.

```typescript
const getUserPhoneNumber = (data: ResponseDataType | null | undefined) => {
	return data.phone;
};
```

Done, but wait, there is another typescript error after we add nullish definitions inside the function parameter. This is because we called `phone` from `data` object that can be undefined. Oke let's fix this.

```typescript
const getUserPhoneNumber = (data: ResponseDataType | null | undefined) => {
	if (data){
		return data.phone;
	}
	
	return undefined; // or maybe null, or any fallback you wanted
}
```
and, all expected error have been resolved, this is the final codes.
```typescript
interface ReponseDataType {
	name: string
	phone: number
};

interface ResponseType {
	id: number
	status: string
	data: ResponseDataType | null | undefined
};

const response: ResponseType = {
	id: 2,
	status: 'OK',
	message: 'All is well',
	data: {
		name: 'Abigail',
		phone: 85123123123,
	}
};

const getUserPhoneNumber = (data: ResponseDataType | null | undefined) => {
	if (data){
		return data.phone;
	}
	
	return undefined; // or maybe null, or any fallback you wanted
}

getUserPhoneNumber(response.data); // 85123123123
```

## Refactoring

I have found something that catches my eyes when i use [GraphQL Code Generator](https://graphql-code-generator.com/).

```typescript
type Maybe<T> = T | null | undefined;
```

This is basically just wrapper for type to have `null` and `undefined`. `T` just like function parameter in javascript/typescript, so it can be anything. Let say, if you want type string with nullable value, you can do `const name: Maybe<string> = undefined` .

From here we can use it to refactor our code into something like this.

```typescript
type Maybe<T> = T | null | undefined;

interface ReponseDataType {
	name: string
	phone: number
};

interface ResponseType {
	id: number
	status: string
	data: Maybe<ResponseDataType>
};

const response: ResponseType = {
	id: 2,
	status: 'OK',
	message: 'All is well',
	data: {
		name: 'Abigail',
		phone: 85123123123,
	}
};

const getUserPhoneNumber = (data: Maybe<ResponseDataType>) => {
	if (data){
		return data.phone;
	}
	
	return undefined; // or maybe null, or any fallback you wanted
};

getUserPhoneNumber(response.data); // 85123123123
```

Done, type definitions are more readable now. There is one more thing that we can do if we use typescript above `3.7` which is **optional chaining**, you can read more about this in [here](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html). It's useful if we want access value from nested object that can be null or undefined. In our case, it should be done like this.

```typescript
const getUserPhoneNumber = (data: Maybe<ResponseDataType>) => {
	return data?.phone;
};
```

whenever the `response.data` is null or undefined the `getUserPhoneNumber()` function will safely return `undefined` without getting _cannot read property 'data' of undefined_ error.

One more tip, if you often use `Maybe<T>` helper, you can simply put this helper inside `index.d.ts` file in the root of your project. So you can call it anywhere without importing the type.

## Conclusion

Sometime typescript error is really annoying, on the other hand all the typescript say is just want us to match all the condition using the power of types. Actually, this is helpful, so if we don't get anything error from typescript, we might be more confident about our code. Typescript is your friend and weapon, it has power, but you need to know them well.