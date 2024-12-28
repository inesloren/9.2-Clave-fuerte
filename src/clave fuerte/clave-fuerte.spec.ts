import { validarClave, tieneMayusculasYMinusculas, tieneNumeros, tieneCaracterEspecial, tieneLongitudMinima, tieneNombreUsuario, tienePalabrasComunes } from "./clave-fuerte";

//Tiene Mayusculas Y Minusculas

describe("tieneMayusculasYMinusculas", () => {
  it("debería lanzar un error si la clave es undefined", () => {
    // Arrange
    const clave: any = undefined;

    // Act
    const resultado = () => tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede ser undefined o null");
  });

  it("debería lanzar un error si la clave es null", () => {
    // Arrange
    const clave: any = null;

    // Act
    const resultado = () => tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede ser undefined o null");
  });

  it("debería lanzar un error si la clave es vacía", () => {
    // Arrange
    const clave: any = "";

    // Act
    const resultado = () => tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede estar vacía");
  });

  it("debería devolver un objeto con esValida a true si la clave tiene mayusculas y minusculas", () => {
    // Arrange
    const clave = "Password";

    // Act
    const resultado = tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultado.esValida).toBe(true);
  });

  it("debería devolver un objeto con esValida a false si la clave solo tiene minusculas y devolver un mensaje de error", () => {
    // Arrange
    const clave = "password";

    // Act
    const resultado = tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe contener mayusculas y minusculas");
  });

  it("debería devolver un objeto con esValida a false si la clave solo tiene mayusculas y devuelve un mensaje de error", () => {
    // Arrange
    const clave = "PASSWORD";

    // Act
    const resultado = tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe contener mayusculas y minusculas");
  });
});

//Tiene Numeros

describe("tieneNumeros", () => {
  it("debería lanzar un error si la clave es undefined", () => {
    // Arrange
    const clave: any = undefined;

    // Act
    const resultado = () => tieneNumeros(clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede ser undefined o null");
  });

  it("debería lanzar un error si la clave es null", () => {
    // Arrange
    const clave: any = null;

    // Act
    const resultado = () => tieneNumeros(clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede ser undefined o null");
  });

  it("debería lanzar un error si la clave es vacía", () => {
    // Arrange
    const clave: any = "";

    // Act
    const resultado = () => tieneNumeros(clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede estar vacía");
  });

  it("debería devolver un objeto con esValida a true si la clave tiene numeros", () => {
    // Arrange
    const clave = "1p3456";

    // Act
    const resultado = tieneNumeros(clave);

    // Assert
    expect(resultado.esValida).toBe(true);
  });

  it("debería devolver un objeto con esValida a false si la clave solo tiene letras y devolver un mensaje de error", () => {
    // Arrange
    const clave = "password";

    // Act
    const resultado = tieneNumeros(clave);

    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe contener números");
  });
});

//Tiene Caracter Especial

describe("tieneCaracterEspecial", () => {
  it("debería lanzar un error si la clave es undefined", () => {
    // Arrange
    const clave: any = undefined;

    // Act
    const resultado = () => tieneCaracterEspecial(clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede ser undefined o null");
  });

  it("debería lanzar un error si la clave es null", () => {
    // Arrange
    const clave: any = null;

    // Act
    const resultado = () => tieneCaracterEspecial(clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede ser undefined o null");
  });

  it("debería lanzar un error si la clave es vacía", () => {
    // Arrange
    const clave: any = "";

    // Act
    const resultado = () => tieneCaracterEspecial(clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede estar vacía");
  });

  it("debería devolver un objeto con esValida a true si la clave tiene caracter especial", () => {
    // Arrange
    const clave = "!pasword";

    // Act
    const resultado = tieneCaracterEspecial(clave);

    // Assert
    expect(resultado.esValida).toBe(true);
  });

  it("debería devolver un objeto con esValida a false si la clave solo tiene letras y devolver un mensaje de error", () => {
    // Arrange
    const clave = "password";

    // Act
    const resultado = tieneCaracterEspecial(clave);

    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe contener un caracter especial");
  });
});

//Tiene Longitud Minima

describe("tieneLongitudMinima", () => {
  it("debería lanzar un error si la clave es undefined", () => {
    // Arrange
    const clave: any = undefined;

    // Act
    const resultado = () => tieneLongitudMinima(clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede ser undefined o null");
  });

  it("debería lanzar un error si la clave es null", () => {
    // Arrange
    const clave: any = null;

    // Act
    const resultado = () => tieneLongitudMinima(clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede ser undefined o null");
  });

  it("debería lanzar un error si la clave es vacía", () => {
    // Arrange
    const clave: any = "";

    // Act
    const resultado = () => tieneLongitudMinima(clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede estar vacía");
  });

  it("debería devolver un objeto con esValida a true si la clave tiene longitud minima", () => {
    // Arrange
    const clave = "password";

    // Act
    const resultado = tieneLongitudMinima(clave);

    // Assert
    expect(resultado.esValida).toBe(true);
  });

  it("debería devolver un objeto con esValida a false si la clave no llega a tener 8 caracteres y devolver un mensaje de error", () => {
    // Arrange
    const clave = "123456";

    // Act
    const resultado = tieneLongitudMinima(clave);

    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe tener al menos 8 caracteres");
  });
});

//No contiene nombre de usuario

describe("tieneNombreUsuario", () => {
  it("debería lanzar un error si la clave es undefined", () => {
    // Arrange
    const clave: any = undefined;
    const nombreUsuario = "ines";

    // Act
    const resultado = () => tieneNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede ser undefined o null");
  });

  it("debería lanzar un error si la clave es null", () => {
    // Arrange
    const clave: any = null;
    const nombreUsuario = "ines";

    // Act
    const resultado = () => tieneNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede ser undefined o null");
  });

  it("debería lanzar un error si la clave es vacía", () => {
    // Arrange
    const clave: any = "";
    const nombreUsuario = "ines";

    // Act
    const resultado = () => tieneNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultado).toThrowError("La clave no puede estar vacía");
  });

  it("debería devolver un objeto con esValida a true si la clave no contiene el nombre de usuario", () => {
    // Arrange
    const clave = "password";
    const nombreUsuario = "ines";

    // Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultado.esValida).toBe(true);
  });

  it("debería devolver un objeto con esValida a false si la clave contiene el nombre de usuario", () => {
    // Arrange
    const clave = "ines897";
    const nombreUsuario = "ines";

    // Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave no puede contener el nombre de usuario");
  });
});

describe("tienePalabrasComunes", () => {
  it("debería lanzar un error si la clave es undefined", () => {
    // Arrange
    const clave: any = undefined;
    const commonPasswords: any = undefined;

    // Act
    const resultado = () => tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultado).toThrowError("La clave no puede ser undefined o null");
  });

  it("debería lanzar un error si la clave es null", () => {
    // Arrange
    const clave: any = null;
    const commonPasswords: any = null;

    // Act
    const resultado = () => tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultado).toThrowError("La clave no puede ser undefined o null");
  });

  it("debería lanzar un error si la clave es vacía", () => {
    // Arrange
    const clave: any = "";
    const commonPasswords: any = "";

    // Act
    const resultado = () => tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultado).toThrowError("La clave no puede estar vacía");
  });

  it("debería devolver un objeto con esValida a true si la clave no contiene palabras comunes", () => {
    // Arrange
    const clave = "cacatua";
    const commonPasswords: string[] = ["password", "123456"];

    // Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultado.esValida).toBe(true);
  });

  it("debería devolver un objeto con esValida a false si la clave contiene palabras comunes", () => {
    // Arrange
    const clave = "password";
    const commonPasswords: string[] = ["password", "123456"];

    // Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave no puede contener palabras comunes");
  });
});

describe("validarClave", () => {
  it("debería lanzar un error si la clave es undefined", () => {
    // Arrange
    const clave: any = undefined;
    const nombreUsuario: any = undefined;
    const commonPasswords: any = undefined;

    // Act
    const resultado = () => validarClave(nombreUsuario, clave, commonPasswords);

    // Assert
    expect(resultado).toThrowError("La clave no puede ser undefined o null");
  });

  it("debería lanzar un error si la clave es null", () => {
    // Arrange
    const clave: any = null;
    const nombreUsuario: any = null;
    const commonPasswords: any = null;

    // Act
    const resultado = () => validarClave(nombreUsuario, clave, commonPasswords);

    // Assert
    expect(resultado).toThrowError("La clave no puede ser undefined o null");
  });

  it("debería lanzar un error si la clave es vacía", () => {
    // Arrange
    const clave: any = "";
    const nombreUsuario: any = "";
    const commonPasswords: any = "";

    // Act
    const resultado = () => validarClave(nombreUsuario, clave, commonPasswords);

    // Assert
    expect(resultado).toThrowError("La clave no puede estar vacía");
  });

  it("debería devolver un objeto con esValida a true si la clave es valida", () => {
    // Arrange
    const clave = "5678Uie*3";
    const nombreUsuario = "ines";
    const commonPasswords: string[] = ["password", "123456"];

    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    // Assert
    expect(resultado.esValida).toBe(true);
  });

  it("debería devolver un objeto con esValida a false si la clave es invalida", () => {
    // Arrange
    const clave = "paEssword123";
    const nombreUsuario = "ines";
    const commonPasswords: string[] = ["password", "123456"];

    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    // Assert
    expect(resultado.esValida).toBe(false);
  });
});
