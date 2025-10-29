export const handleCreateTransactionErrros = (error: string) => {
switch (error) {
    case 'invalid input syntax for type uuid: \"\"':
        return 'Error al crear la transacción, por favor intenta de nuevo'
    default:
        return 'Error al crear la transacción'
}
}