from typing import TypedDict

from fastapi import FastAPI

app = FastAPI(
    root_path="/api/v1",
    title="Example API",
    version="0.1.0",
)


class Quote(TypedDict):
    """A quote."""

    quote: str


@app.get("/quotes/random")
async def random_quote() -> Quote:
    """Get a random quote."""
    return {"quote": "The best is yet to come."}
