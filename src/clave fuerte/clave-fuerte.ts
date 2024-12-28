import { ValidacionClave } from "./model";

export const existeClave = (clave: string | null | undefined): void => {
    if (clave === undefined || clave === null) {
        throw new Error('La clave no puede ser undefined o null');
    }
    if (clave === '') {
        throw new Error('La clave no puede estar vacía');
    }
};

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {

    existeClave(clave);

    const tieneMayucula = /[A-Z]/.test(clave);
    const tieneMinuscula = /[a-z]/.test(clave);

    if (!tieneMayucula || !tieneMinuscula) {
      return {
          esValida: false,
          error: "La clave debe contener mayusculas y minusculas"
      };}

      return {
          esValida: true
      };
};

export const tieneNumeros = (clave: string): ValidacionClave => {

  existeClave(clave);

  const tieneNumeros = /[0-9]/.test(clave);

  if (!tieneNumeros) {
    return {
      esValida: false,
      error: "La clave debe contener números"
    };
  }

  return {
    esValida: true
  };    
};

export const tieneCaracterEspecial = (clave: string): ValidacionClave => {

  existeClave(clave);

  const tieneCaracterEspecial = /[!@#$%^&*()_+]/.test(clave);

  if (!tieneCaracterEspecial) {
    return {
      esValida: false,
      error: "La clave debe contener un caracter especial"
    };
  }

  return {
    esValida: true
  };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {

  existeClave(clave);

  if (clave.length < 8) {
    return {
      esValida: false,
      error: "La clave debe tener al menos 8 caracteres"
    };
  }

  return {
    esValida: true
  };
};

export const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {

  existeClave(clave);

  const contieneNombreUsuario = clave.includes(nombreUsuario);

  if (contieneNombreUsuario) {
    return {
      esValida: false,
      error: "La clave no puede contener el nombre de usuario"
    };
  }
  return {
    esValida: true
  };
};

export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {

  existeClave(clave);

  const contienePalabrasComunes = commonPasswords.some(password => clave.includes(password));
  
  if (contienePalabrasComunes) {
    return {
      esValida: false,
      error: "La clave no puede contener palabras comunes"
    };
  }
  return {
    esValida: true
  };
};

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  
  existeClave(clave);

  const reglas = [
    { validar: () => tieneMayusculasYMinusculas(clave), error: "La clave debe contener mayúsculas y minúsculas" },
    { validar: () => tieneNumeros(clave), error: "La clave debe contener números" },
    { validar: () => tieneCaracterEspecial(clave), error: "La clave debe contener un carácter especial" },
    { validar: () => tieneLongitudMinima(clave), error: "La clave debe tener al menos 8 caracteres" },
    { validar: () => tieneNombreUsuario(nombreUsuario, clave), error: "La clave no puede contener el nombre de usuario" },
    { validar: () => tienePalabrasComunes(clave, commonPasswords), error: "La clave no puede contener palabras comunes" }
  ];

  for (const { validar, error } of reglas) {
    if (!validar().esValida) {
      return {
        esValida: false,
        error
      };
    }
  }

  return {
    esValida: true
  };
};
