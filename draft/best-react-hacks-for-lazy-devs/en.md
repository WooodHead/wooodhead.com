## 1\. Adding console logs to render expressions

[![Sean](https://miro.medium.com/fit/c/56/56/1*xF32eB5UgnVzg7YGIR_y3g.png)](https://sean-warman.medium.com/?source=post_page-----b44b533fa923--------------------------------)

If you wanna log the props to an expression style component but can’t be bothered to convert it, put the log in parentheses then add chopsticks `||`:

![](https://miro.medium.com/max/1400/1*r6-vJesAFHVsWu5o0v-Osg.png)

Note. you have to use the _or_ operator because console.log returns undefined.

## 2\. Trace a function’s call with the Error object

If you’ve no idea where a function’s being called from, log an `Error` object in it and you’ll get a stack trace in the console:

![](https://miro.medium.com/max/60/1*4sZ3raJy9FHue2dWjm9twA.png?q=20)

![](https://miro.medium.com/max/1400/1*4sZ3raJy9FHue2dWjm9twA.png)

![](https://miro.medium.com/max/60/1*juD71Cp-6Kuq2TpItTV7gQ.png?q=20)

![](https://miro.medium.com/max/1400/1*juD71Cp-6Kuq2TpItTV7gQ.png)

Notice the third line on each log, one is being called from `EnterPasscode.tsx` line 106 and the other is from `appConfigSaga.ts` line 576.

## 3\. Prefix all your logs to filter out warnings

Is React giving you a ton of warnings and errors in your console about keys and deprecations but you’re too lazy to fix them?

Add a distinct string to each of your comments:

![](https://miro.medium.com/max/1400/1*usJujwcXNP0xAqV0TsrgFA.png)

Then filter the logs by that string in your console:

![](https://miro.medium.com/max/1400/1*z6IubwK1xb1sk1-UIVQx5g.png)

## 4\. Adding functions to the window

Want to know what a function does without having to read all the docs? Just add it to the `window` then you can play with it in the console.

I do this all the time with `moment` because I can never remember which functions return what:

![](https://miro.medium.com/max/1400/1*ZMeLju3lcAaHEEW-imdeWw.png)

![](https://miro.medium.com/max/1400/1*030i07PJHC-qezefR6hn8A.png)

## 5\. Ternary question marks

Want to write more ternary question marks? Most people know that using `||` and `&&` is a super quick way of writing conditions, but did you know there’s a `??` as well?

![](https://miro.medium.com/max/1400/1*rMNsGB3KsVNGRSyx7rqR8A.png)

This says, if `state?.bookings` is undefined return `{}`.

Why not just use `||`?

Whereas `||` is useful for evaluating if a value is “falsy” (so anything that the `if` statement thinks is false) `??` only evaluates things that are `null` or `undefined`. It’s basically a bit stricter.

This is useful because you might be accessing a property that’s _value_ is false…

![](https://miro.medium.com/max/1400/1*b8E8Hmhulqqb9H31Z0x7Hg.png)

Get it?

## 6\. Optional chaining an object’s \[expressed\] prop

You can also use `?` when accessing object props with a variable…

![](https://miro.medium.com/max/1400/1*Gq8pGp6JTvWHFJNl8fhpjA.png)

It’s weird though, you would have guessed the syntax to be `bookings?[id]`. I think this is because the optional chaining operator is actually `?.` rather than just `?` on its own: [MDN Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).

## 7\. console.group

`console.group()` is super useful when React causes your logs to print over and over.

Say I have a function that has a loop inside it. If I log the outcome of each loop iteration I’ll get a ton of logs because not only is the loop logging each iteration but React is also calling the function over and over as the component re-renders:

![](https://miro.medium.com/max/1400/1*i9jObXdxu-rmjS311GXiAA.png)

I could work out where the iteration starts and ends here but that would take way too much effort. An easier way is to wrap the contents of my function with `console.group` and `console.groupEnd`:

![](https://miro.medium.com/max/1400/1*NehcAZ85vB4PIjHQuol6-A.png)

Now it groups the logs per render:

![](https://miro.medium.com/max/1400/1*8ipM-AIEwtgcW6fhKQqo2g.png)

## 8\. Force re-renders using the key prop

Need to refresh a component. Force it to re-render by adding a `key` to it.

![](https://miro.medium.com/max/1400/1*c0Ij1UH_4YiDb80nhj2uZQ.png)

Technically you can do it with any prop but `key` is on every React component so you can use this on a component from a module you’re not in control of.

To be honest I’m yet to actually use this, but still, good to know.
