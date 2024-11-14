## General Info
- <b> Objective: </b> Development of an API in Nest.JS using the Factory Design Pattern. The boilerplate of this API was generated using Chat-GPT.

## What are Design Patterns
*From Refactoring Guru*: Design patterns are typical solutions to commonly occurring problems in software design. They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.

Creational design patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

## What is the Builder Design Pattern
*From Refactoring Guru*: Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

<b>Pros</b>:
- You avoid tight coupling between the creator and the concrete products.
- Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support.
- Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.

<b>Cons</b>:
- The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.

## How this project was created
First, a new Nest.JS project was started through the CLI:
```
nest new factory-pattern-api
```

Then, a Boilerplate for this project was generated using Chat-GPT. The prompt given was: "Create a Nest.js api exemplifying the factory method design pattern". Chat-GPT indicated which entities, controllers and factories were needed for the project. The project required some adaptations to run properly.

## References
- [Refactoring Guru - Factory Pattern](https://refactoring.guru/design-patterns/factory-method);
- [ChatGPT](https://chatgpt.com/);