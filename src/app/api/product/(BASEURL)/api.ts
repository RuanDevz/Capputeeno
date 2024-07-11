export async function GetURL(route: string) {
  const url = `${process.env.NEXT_PUBLIC_API_PRODUCTS}${route}`;

  return await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
}
