type User = {
  email: string;
  password: string;
};

const fakeUser: User = {
  email: "admin@email.com",
  password: "123456",
};

export function login(email: string, password: string): boolean {
  return email === fakeUser.email && password === fakeUser.password;
}