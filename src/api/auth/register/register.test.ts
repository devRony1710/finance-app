import { describe, expect, it, vi } from "vitest";
import { supabaseRegister } from "./register";
import { supabase } from "@/api/config/create-client";

vi.mock("@/api/config/create-client", () => ({
    supabase: {
        auth: {
            signUp: vi.fn(),
        },
    },
}));

const mockedSupabase = supabase as unknown as {
  auth: {
    signUp: ReturnType<typeof vi.fn>;
  };
};

describe("supabaseLogin test suite", () => {
  it("return data when the login is successful", async () => {
    const mockData = {
      user: { id: "123" },
      session: null, // necesario para completar el tipo
    };

    mockedSupabase.auth.signUp.mockResolvedValue({
      data: mockData,
      error: null,
    });

    const result = await supabaseRegister({
      email: "test@example.com",
      password: "123456",
      name: "test",
      lastName: "test",
    });

    expect(mockedSupabase.auth.signUp).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "123456",
      options: {
        data: {
          name: "test",
          lastName: "test",
        },
      },
    });
    expect(result.user).toEqual(mockData.user);
    expect(result.session).toEqual(mockData.session);
  });

  it("throws error when Supabase returns error", async () => {
    const mockError = new Error("Credenciales inválidas");

    mockedSupabase.auth.signUp.mockResolvedValue({
      data: { user: null, session: null },
      error: mockError,
    });

    await expect(
      supabaseRegister({
        email: "wrong@example.com",
        password: "badpass",
        name: "test",
        lastName: "test",
      })
    ).rejects.toThrow("Credenciales inválidas");
  });
});
