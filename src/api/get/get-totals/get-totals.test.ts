import { supabase } from "@/api/config/create-client";
import { describe, expect, it, vi } from "vitest";
import { getTotals } from "./get-totals";

vi.mock("@/api/config/create-client", () => ({
    supabase: {
        rpc: vi.fn(),
    },
}));

const mockedSupabase = supabase as unknown as {
    rpc: ReturnType<typeof vi.fn>;
};

describe("getTotals test suite", () => {
    it("return data when the getTotals is successful", async () => {
        const mockData = {
            incomes: 0,
            expenses: 0,
        };

        mockedSupabase.rpc.mockResolvedValue({ data: mockData, error: null });

        const result = await getTotals("1");

        expect(mockedSupabase.rpc).toHaveBeenCalledWith("get_total_incomes", { uid: "1" });
        expect(result).toEqual(mockData);
    });
});
