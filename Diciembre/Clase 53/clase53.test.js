
const capitalizar = nombre => {
    if (!nombre){
    //if (nombre === "" || nombre === null || nombre === undefined){
    nombre = "usuario"
    }    
    nombre = nombre.trim()

    let primeraLetra = nombre[0].toUpperCase()
    let restoDelNombre = nombre.slice(1).toLowerCase()
    return primeraLetra + restoDelNombre
}


test('recibo malena y devuelvo Malena', () =>{
    expect(capitalizar("malena")).toBe("Malena");
})

test('recibo MALENA y devuelvo Malena', () =>{
    expect(capitalizar("MALENA")).toBe("Malena");
})

test('recibo mALENA y devuelvo Malena', () =>{
    expect(capitalizar("mALENA")).toBe("Malena");
})

test('recibo malena y devuelvo Malena', () =>{
    expect(capitalizar(" malena")).toBe("Malena");
})

test('recibo "" y devuelvo "Usuario"', () =>{
    expect(capitalizar("")).toBe("Usuario");
})

test('recibo null y devuelvo "Usuario"', () =>{
    expect(capitalizar(null)).toBe("Usuario");
})

test('recibo "12345" y devuelvo "12345"', () =>{
    expect(capitalizar("12345")).toBe("12345");
})