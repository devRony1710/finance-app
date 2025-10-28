import { supabase } from "@/api/config/create-client"
import { describe, expect, it, vi } from "vitest"
import { getBalanceRpc } from "./get-user-balance"

vi.mock("@/api/config/create-client", () => ({
  supabase: {
    rpc: vi.fn(),
  },
}))

const mockedSupabase = supabase as unknown as {
  rpc: ReturnType<typeof vi.fn>
}

describe("getBalance test suite", () => {
  it("return data when the getBalance is successful", async () => {
    const mockData = 100

    mockedSupabase.rpc.mockResolvedValue({
      data: mockData,
      error: null,
    })

    const result = await getBalanceRpc("1")

    expect(mockedSupabase.rpc).toHaveBeenCalledWith("get_user_balance", { uid: "1" })
    expect(result).toEqual(mockData)
  })
})
