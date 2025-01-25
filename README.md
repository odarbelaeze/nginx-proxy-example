# example

An example of a simple API and UI that uses the [FastAPI][fastapi] and
[React][react] frameworks.

## Running the project

You can run the project using the following commands:

```bash
docker compose up --watch
```

Then you can visit the UI at [http://localhost:5173][local] and the API docs at
[http://localhost:8000/api/v1/redoc][redoc]. And to get a random quote you can
visit [http://localhost:8000/api/v1/quotes/random][quote].

Using the `--watch` flag will enable live-reloading for both the API and the UI.

[fastapi]: https://fastapi.tiangolo.com/
[react]: https://react.dev/
[local]: http://localhost:5173
[redoc]: http://localhost:8000/api/v1/redoc
[quote]: http://localhost:8000/api/v1/quotes/random
