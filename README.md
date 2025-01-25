# example

An example of a simple API and UI that uses the [FastAPI][fastapi] and
[React][react] frameworks. It uses [nginx][nginx] as a reverse proxy to serve
the API and the UI from the same origin.

## Running the project

You can run the project using the following commands:

```bash
docker compose up --watch
```

Then you can visit the UI at [http://localhost:8080][local] and the API docs at
[http://localhost:8080/api/v1/redoc][redoc]. And to get a random quote you can
visit [http://localhost:8080/api/v1/quotes/random][quote].

Using the `--watch` flag will enable live-reloading for both the API and the UI.

[fastapi]: https://fastapi.tiangolo.com/
[react]: https://react.dev/
[local]: http://localhost:8080
[redoc]: http://localhost:8080/api/v1/redoc
[quote]: http://localhost:8080/api/v1/quotes/random
