export const formatTypeLabel = (type: string) => {
    switch (type) {
        case 'income':
            return 'Ingreso'
        case 'expense':
            return 'Gasto'
        default:
            return 'Tipo'
    }
}