import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createTransactionSupabase } from './create-transaction-supabase'
import { supabase } from '@/api/config/create-client'
import type { CreateTransactionSupabaseParams } from './create-transaction-supabase.types'

// Mock de Supabase
vi.mock('@/api/config/create-client', () => ({
  supabase: {
    from: vi.fn(() => ({
      insert: vi.fn(() => ({
        select: vi.fn(() => ({
          single: vi.fn()
        }))
      }))
    }))
  }
}))

describe('createTransactionSupabase test suite', () => {
  const mockTransaction: CreateTransactionSupabaseParams = {
    title: 'Test Transaction',
    user_id: 'user-123',
    amount: 100,
    type: 'expense',
    category_id: 'cat-456',
    date: new Date('2023-01-01')
  }

  const mockResponse = {
    id: 'txn-789',
    ...mockTransaction,
    created_at: new Date().toISOString()
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('debe crear una transacción exitosamente', async () => {
    // Configuración del mock
    const mockSingle = vi.fn().mockResolvedValueOnce({
      data: mockResponse,
      error: null
    })
    
    const mockSelect = vi.fn().mockReturnValueOnce({ single: mockSingle })
    const mockInsert = vi.fn().mockReturnValueOnce({ select: mockSelect })
    const mockFrom = vi.fn().mockReturnValueOnce({ insert: mockInsert })
    
    vi.mocked(supabase.from).mockImplementation(mockFrom)

    const result = await createTransactionSupabase(mockTransaction)

    expect(supabase.from).toHaveBeenCalledWith('transactions')
    expect(mockInsert).toHaveBeenCalledWith({
      title: 'Test Transaction',
      user_id: 'user-123',
      amount: 100,
      type: 'expense',
      category_id: 'cat-456',
      date: expect.any(Date)
    })
    expect(mockSelect).toHaveBeenCalled()
    expect(mockSingle).toHaveBeenCalled()
    expect(result).toEqual(mockResponse)
  })

  it('debe lanzar un error cuando la creación falla', async () => {
    const errorMessage = 'Error al crear la transacción'
    
    // Configuración del mock para error
    vi.mocked(supabase.from).mockReturnValue({
    insert: vi.fn().mockReturnThis(),
    select: vi.fn().mockReturnThis(),
    single: vi.fn().mockResolvedValueOnce({
        data: null,
        error: new Error(errorMessage)
    })
    } as any)


    await expect(createTransactionSupabase(mockTransaction)).rejects.toThrow(errorMessage)
  })
})