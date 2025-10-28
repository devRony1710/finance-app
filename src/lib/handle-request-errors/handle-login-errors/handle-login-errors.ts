export const handleLoginErrors = (error: string) => {
    switch (error) {
        case 'Invalid login credentials':
            return 'Credenciales inválidas'
        case 'User not found':
            return 'Usuario no encontrado'
        case "missing email or phone":
            return 'Falta el correo o la contraseña'
        default:
            return 'Hubo un error al iniciar sesión'
    }
}
