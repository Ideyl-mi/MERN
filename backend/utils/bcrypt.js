import bcrypt from "bcrypt";

export const hashedPassword = async (password) => {
  const result = await bcrypt.hash(password, 10);
  return result;
};
export const verifyPassword = async ({ plainPassword, hashedPassword }) => {
  const result = await bcrypt.compare(plainPassword, hashedPassword);
  return result;
};
