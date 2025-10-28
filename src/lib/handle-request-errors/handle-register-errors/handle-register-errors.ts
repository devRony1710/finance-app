export const handleRegisterErrors = (error: string) => {
switch (error) {
    case 'auth/user-already-exists':
        return 'El usuario ya existe';
    case 'auth/invalid-password':
        return 'La contraseña debe tener al menos 6 caracteres';
    case 'auth/invalid-email':
        return 'El correo electrónico debe ser válido';
    default:
        return 'Error al crear la cuenta';
    }
}
