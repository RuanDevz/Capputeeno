import { data } from "../all/route";

export async function GET() {
  const mugs = data.filter((product) => product.category === "mugs");
  return Response.json(mugs);
}
