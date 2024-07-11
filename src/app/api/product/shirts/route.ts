import { data } from "../all/route";

export async function GET() {
  const shirts = data.filter((product) => product.category === "t-shirts");
  return Response.json(shirts);
}
