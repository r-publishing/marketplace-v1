export const bagIdFromAddress = (address: string) =>
  address.split("/").slice(1).join("");
