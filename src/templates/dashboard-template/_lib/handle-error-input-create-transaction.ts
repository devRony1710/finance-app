export const handleErrorInputCreateTransaction = (error: string) => {
    switch (error) {
        case 'Invalid input: expected number, received undefined':
            return 'El monto es requerido'
        case 'Invalid input: expected string, received undefined':
            return 'El nombre es requerido'
    }
}
