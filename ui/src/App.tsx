import z from "zod";
import "./App.css";
import { useQuery } from "@tanstack/react-query";

const quoteSchema = z.object({
  quote: z.string(),
});

type Quote = z.infer<typeof quoteSchema>;

const fetchRandomQuote = async (): Promise<Quote> => {
  const response = await fetch("/api/v1/quotes/random");
  const data = await response.json();
  return quoteSchema.parse(data);
};

function App() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["quotes", "random"],
    queryFn: fetchRandomQuote,
  });
  if (isLoading) {
    return <p>Loading your quote...</p>;
  }
  if (isError || !data) {
    console.error(error);
    return <p>Error fetching quote</p>;
  }
  return <p>{data.quote}</p>;
}

export default App;
