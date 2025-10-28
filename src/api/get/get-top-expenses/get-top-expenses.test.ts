import { describe, expect, it, vi } from "vitest";
import { getTopExpensesRpc } from "./get-top-expenses";
import { supabase } from "@/api/config/create-client";

vi.mock("@/api/config/create-client", () => ({
    supabase: {
        rpc: vi.fn(),
    },
}));

const mockedSupabase = supabase as unknown as {
    rpc: ReturnType<typeof vi.fn>;
};

describe('getTopExpenses test suite', () => {
    it('should return data when the getTopExpenses is successful', async () => {
        const mockData = [
            { category: 'test', color: '#00C49F', total: 100 },
        ];

        mockedSupabase.rpc.mockResolvedValue({
            data: mockData,
            error: null,
        });

        const result = await getTopExpensesRpc('1');

        expect(mockedSupabase.rpc).toHaveBeenCalledWith('get_top_expenses', { uid: '1' });
        expect(result).toEqual(mockData);
    });
});