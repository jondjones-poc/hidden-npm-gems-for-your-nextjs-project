import { z } from "zod";
import useSWR from 'swr';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export default function Zod() {

  const { data, error } = useSWR('/api/staticdata', fetcher);

  if (data) {

    const schema = z.object({
      title: z.string(),
      content: z.string()
    });

    var json  = JSON.parse(data);
    const zodParsed = schema.parse(json);

    console.log('zodParsed', zodParsed)
  }

  return (
    <>
    Hi
    </>
  )
}


