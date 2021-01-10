---
title: Learn about FastAPI

date: 2020-11-22
tags: 
  - featurepreneur
  - Fast Api
  - api
author: Shruti
featuredimg: 'https://miro.medium.com/max/700/1*vBsKYhKXLcC-4ROVBKyL3A.png'
summary: Learn about Fast api
---

When it comes to application development using Python, Flask and Django have been our go-to. They are the two most used Python frameworks. But now there is this relatively new Python framework called FastAPI. It has very extensive documentation and rich examples, which makes things easier.

**What is a REST API?**

REST determines what the API looks like. It stands for “Representational State Transfer”. It is a set of rules that developers follow when they create their API. Rest API is a software that enables applications to communicate with a database or other software effectively.

**What is FastAPI?**

FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.

FastAPI is a Python framework with a set of tools that enables developers to use a REST interface to call commonly used functions to implement applications. It is accessed through a REST API to call common building blocks for an app.

FastAPI is a Python API microframework built on top of Starlette, Pydantic, and Uvicorn.

**Why FastAPI?**

* Interactive API docs: FastAPI comes with interactive API docs, the automatic interactive API documentation being Swagger UI and the alternative being Redoc. It has a simple, but an elegant interface that creates an API document on the fly.

* REST API Endpoints: FastAPI supports GET, PUT, POST, DELETE, OPTIONS, HEAD, PATCH, and TRACE Rest operations without the need for any additional packages.

* Native Async Support: FastAPI can handle requests asynchronously using the async/await Python keywords unlike Flask without the need to install any third-party frameworks.

* Dependency Injection: FastAPI comes up with a very powerful and easy to use a built-in injection system to handle dependencies at your endpoint.

* Performance: FastAPI beats every framework when it comes to performance, whereas the most commonly used frameworks, like Flask and Django, lag.

This medium article will help you understand FastAPI in detail.

I started with creating a FastAPI application that can GET(with and without id), POST, and DELETE items. I later dockerized the application just as an extra. This project lives in Github if you’re interested.


