export interface Usuario {
  id?: string;
  usuario: string;
  pass: string;
  email: string;
}

export interface UsuarioLogin {
  usuario: string;
  pass: string;
}
