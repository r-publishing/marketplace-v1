export const bagIdFromAddress = (address) =>
  address.split("/").slice(1).join("");
