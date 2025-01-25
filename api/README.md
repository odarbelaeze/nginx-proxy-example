# example/api

This is an example of a simple API that uses the [FastAPI][fasapi] framework.

## Running the API

To run the API, you need to have Python 3.7 or later installed. You can then
install the dependencies and run the API with the following commands:

```bash
uv sync
uv run fastapi dev src/example/api.py
```

Then you can visit the API docs at [http://localhost:8000/api/v1/redoc][redoc].

[fastapi]: https://fastapi.tiangolo.com/
[redoc]: http://localhost:8000/api/v1/redoc
