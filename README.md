## General Info
- <b> Objective: </b> Development of an API in Nest.JS using the Factory Design Pattern.

## What are Design Patterns
*From Refactoring Guru*: Design patterns are typical solutions to commonly occurring problems in software design. They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.

Creational design patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

## What is the Builder Design Pattern
*From Refactoring Guru*: Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

<b>Pros</b>:
-  You avoid tight coupling between the creator and the concrete products.
- Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support.
- Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.

<b>Cons</b>:
- The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.

## How this project was created
First, a new .NET WebApi project was started through the CLI:
```
dotnet new webapi -n ProdutoApi
```

Then, a Boilerplate for this project was generated using Chat-GPT. The prompt given was: "Create a simple .NET 8 API based on the Builder Design Pattern". Chat-GPT indicated which entities, controllers and builders were needed for the project. It also indicated a few configurations needed to make sure the controllers were mapped and could run with no issues.

The project didn't compile right away, since the standard .NET Api is built in a slightly different way than what Chat-GPT generated. However, after reading some internet tutorials and doing some modifications to the Controllers, i managed to get it working.

## References
- [Refactoring Guru - Factory Pattern](https://refactoring.guru/design-patterns/factory-method);
- [ChatGPT](https://chatgpt.com/);
- [Creating an ASP.NET Core Web API Project Using .NET Core CLI: A Step-by-Step Guide](https://medium.com/c-sharp-programming/creating-an-asp-net-core-web-api-project-using-net-core-cli-a-step-by-step-guide-44699c03c3c5);
- [Tutorial: Create a web API with ASP.NET Core
](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-8.0&tabs=visual-studio).