export const handleDeleteTransactionErrros = (error: string) => {
switch (error) {
    case 'invalid input syntax for type uuid: \"\"':
        return 'Error al eliminar la transacción, por favor intenta de nuevo'
    default:
        return 'Error al eliminar la transacción'
}
}