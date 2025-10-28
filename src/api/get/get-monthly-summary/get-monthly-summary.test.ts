import { supabase } from "@/api/config/create-client";
import { describe, expect, it, vi } from "vitest";
import { getMonthlySummaryRpc } from "./get-monthly-summary";

vi.mock("@/api/config/create-client", () => ({
  supabase: {
    rpc: vi.fn(),
  },
}));

const mockedSupabase = supabase as unknown as {
  rpc: ReturnType<typeof vi.fn>;
};

describe("getMonthlySummary test suite", () => {
  it("return data when the getMonthlySummary is successful", async () => {
    const mockData = [
      { month: "2023-01", income: 100, expenses: 50 },
    ];

    mockedSupabase.rpc.mockResolvedValue({
      data: mockData,
      error: null,
    });

    const result = await getMonthlySummaryRpc("1");

    expect(mockedSupabase.rpc).toHaveBeenCalledWith("get_monthly_summary", { uid: "1" });
    expect(result).toEqual(mockData);
  });
});
