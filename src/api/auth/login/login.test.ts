import { describe, it, expect, vi } from "vitest";
import { supabase } from "@/api/config/create-client";
import { supabaseLogin } from "./login";

// Se Mockea el archivo create-client.ts para agregar el mock de signInWithPassword
vi.mock("@/api/config/create-client", () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
    },
  },
}));

// aqui se fuerza el tipo del mock correctamente
const mockedSupabase = supabase as unknown as {
  auth: {
    signInWithPassword: ReturnType<typeof vi.fn>;
  };
};

describe("supabaseLogin test suite", () => {
  it("return data when the login is successful", async () => {
    const mockData = {
      user: { id: "123" },
      session: null, // necesario para completar el tipo
    };

    mockedSupabase.auth.signInWithPassword.mockResolvedValue({
      data: mockData,
      error: null,
    });

    const result = await supabaseLogin({
      email: "test@example.com",
      password: "123456",
    });

    expect(mockedSupabase.auth.signInWithPassword).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "123456",
    });
    expect(result.data).toEqual(mockData);
    expect(result.error).toBeNull();
  });

  it("throws error when Supabase returns error", async () => {
    const mockError = new Error("Credenciales inválidas");

    mockedSupabase.auth.signInWithPassword.mockResolvedValue({
      data: { user: null, session: null },
      error: mockError,
    });

    await expect(
      supabaseLogin({
        email: "wrong@example.com",
        password: "badpass",
      })
    ).rejects.toThrow("Credenciales inválidas");
  });
});
