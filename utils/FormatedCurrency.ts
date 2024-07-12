export const convertPriceInCentsToReal = (priceInCents: number): string => {
    const priceInReal = (priceInCents / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return priceInReal;
  };