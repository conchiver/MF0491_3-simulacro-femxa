# Algoritmia: gestion de una cuenta bancaria

Ejercicio de JavaScript para crear una funcion que gestione operaciones basicas sobre el saldo de una cuenta bancaria.

## Objetivo

Completar la funcion `gestionarCuenta(saldo, operacion, cantidad)` en `banco.js`.
SOLAMENTE debes completar el cuerpo de la función.

La funcion recibe:

- `saldo`: saldo actual de la cuenta.
- `operacion`: puede ser `"ingresar"` o `"retirar"`.
- `cantidad`: cantidad de dinero de la operacion.

Debe devolver el nuevo saldo:

- Si la operacion es `"ingresar"`, se suma la cantidad.
- Si la operacion es `"retirar"`, se resta la cantidad.

## Como ejecutarlo con Node

Desde la carpeta `uf1842/1-algoritmia/`, ejecuta:

```bash
node banco.js
```

Tambien puedes ejecutarlo desde la raiz del proyecto con:

```bash
node uf1842/1-algoritmia/banco.js
```

## Salida esperada

Cuando la funcion este implementada correctamente, el programa debe mostrar:

```text
1500
700
70
50
```

Estos valores corresponden a las cuatro pruebas incluidas en `banco.js`.
