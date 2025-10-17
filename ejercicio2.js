// Clase base Animal
class Animal {
    constructor(tipo) {
        this.tipo = tipo;
    }
    toString() {
        return `${this.tipo}`;
    }
}

class Oveja extends Animal {
    constructor(raza, maxLeche, color = "blanco", esquilada = false) {
        super("Oveja");
        this.raza = raza;
        this.color = color;
        this.maxLeche = maxLeche;
        this.esquilada = esquilada;
        this.embarazada = false;
        this.totalLeche = 0;
    }

    balar() {
        console.log("Beeeee");
    }

    ordeñar() {
        if (this.embarazada) {
            console.log("La oveja está embarazada, no puede dar leche.");
            return 0;
        }
        const cantidad = +(Math.random() * this.maxLeche).toFixed(2);
        this.totalLeche += cantidad;
        return cantidad;
    }

    quedarEmbarazada() {
        this.embarazada = true;
    }

    setColor(nuevoColor) {
        this.color = nuevoColor;
        this.balar();
    }

    toString() {
        return `Oveja (${this.raza}), color ${this.color}, leche total: ${this.totalLeche.toFixed(2)}L`;
    }
}

class Conejo extends Animal {
    constructor(colores, orejas) {
        super("Conejo");
        this.colores = colores;
        this.orejas = orejas;
        this.cariño = Math.floor(Math.random() * 101);
        this.potenciaRoer = Math.floor(Math.random() * 100) + 1;
    }

    get indiceAchuchabilidad() {
        return this.cariño / this.potenciaRoer;
    }

    get esAchuchable() {
        return this.indiceAchuchabilidad > 0.5;
    }

    achuchar() {
        if (this.esAchuchable) console.log("cariñitos");
        else console.log("buffffff");
    }

    toString() {
        const base = `Conejo (${this.colores.join(", ")}), orejas ${this.orejas}`;
        return this.esAchuchable ? `${base}, quiero ser tu mejor amigooo!` : base;
    }
}

class Gallina extends Animal {
    constructor(colorHuevos, edadMeses) {
        super("Gallina");
        this.colorHuevos = colorHuevos;
        this.edadMeses = edadMeses;
        this.huevosTotales = 0;
        this.huevosSemana = 0;
        this.ultimoHuevodia = null;
    }

    ponerHuevo() {
        this.huevosTotales++;
        this.huevosSemana++;
        console.log("caaaaa caaaca ca caaaaaa");
    }

    get indicePonibilidad() {
        const diasAdulta = Math.max(0, (this.edadMeses - 6) * 30);
        return diasAdulta === 0 ? 0 : this.huevosTotales / diasAdulta;
    }

    comprobarEstado() {
        if ((this.edadMeses > 12 && this.indicePonibilidad < 0.1) || this.huevosSemana === 0) {
            console.log("Avisar a Gallina Blanca!");
        }
    }

    toString() {
        let str = `Gallina (huevos ${this.colorHuevos}), totales: ${this.huevosTotales}, semana: ${this.huevosSemana}`;
        if (this.indicePonibilidad < 0.1) str += " Poooo po po po, me voy al puchero!";
        return str;
    }
}

class Vaca extends Animal {
    constructor(colores, longitudCuernos, tipoLeche, maxLeche) {
        super("Vaca");
        this.colores = colores;
        this.longitudCuernos = longitudCuernos;
        this.tipoLeche = tipoLeche;
        this.maxLeche = maxLeche;
        this.embarazada = false;
        this.totalLeche = 0;
    }

    mugir() {
        console.log("muuuuuuu-cho cuidado que tengo cuernos");
    }

    ordeñar() {
        if (this.embarazada) {
            console.log("La vaca está embarazada, no puede dar leche.");
            return 0;
        }
        const cantidad = +(Math.random() * this.maxLeche).toFixed(2);
        this.totalLeche += cantidad;
        if (Math.random() < 0.5) this.mugir();
        return cantidad;
    }

    quedarEmbarazada() {
        this.embarazada = true;
    }

    toString() {
        let msg = `Vaca (${this.colores.join(", ")}), leche total: ${this.totalLeche.toFixed(2)}L`;
        if (this.embarazada) msg += ", estoy esperando un ternerito";
        return msg;
    }
}

class Gallo extends Animal {
    constructor(raza) {
        super("Gallo");
        const coloresPosibles = ["azul", "verde", "amarillo", "marrón", "blanco", "negro", "gris"];
        this.raza = raza;
        this.colores = coloresPosibles.filter(() => Math.random() < 0.4);
        this.ultimaHoraCanto = null;
    }

    cantar() {
        const ahora = new Date();
        const hora = ahora.getHours();
        const diff = this.ultimaHoraCanto ? (ahora - this.ultimaHoraCanto) / 60000 : Infinity;
        if ((hora >= 4 && hora <= 8) || diff >= 5) {
            console.log("kikirikiiiiii");
            this.ultimaHoraCanto = ahora;
        } else {
            console.log("poo popopo pooo");
        }
    }

    toString() {
        return `Gallo (${this.raza}), colores: ${this.colores.join(", ")}, último canto: ${this.ultimaHoraCanto}`;
    }
}

console.log("\n===OVEJA ===");
const oveja = new Oveja("churra", 5, "blanco", true);
console.log(`Ordeño 1: ${oveja.ordeñar()}L`);
console.log(`Ordeño 2: ${oveja.ordeñar()}L`);
oveja.quedarEmbarazada();
oveja.ordeñar(); // no da leche
oveja.setColor("marrón");
console.log(oveja.toString());

console.log("\n===CONEJO ===");
const conejo = new Conejo(["azul", "rojo", "verde"], "abajo");
conejo.achuchar();
if (!conejo.esAchuchable) {
    conejo.cariño = 100;
    conejo.potenciaRoer = 10;
    conejo.achuchar();
}
console.log(conejo.toString());

console.log("\n===GALLINA ===");
const gallina = new Gallina("azul fosforito", 7);
console.log("Ponibilidad inicial:", gallina.indicePonibilidad);
gallina.ponerHuevo();
gallina.ponerHuevo();
gallina.ponerHuevo();
console.log("Ponibilidad tras huevos:", gallina.indicePonibilidad);
console.log(gallina.toString());

console.log("\n===VACA ===");
const vaca = new Vaca(["negro"], 0.1, "desnatada", 8);
vaca.ordeñar();
vaca.ordeñar();
vaca.ordeñar();
console.log(vaca.toString());

console.log("\n===GALLO ===");
const gallo = new Gallo("azarqueliana");
gallo.cantar();
gallo.cantar();
console.log(gallo.toString());

// Crear cuadras
function generarEntero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cuadraOvejas = Array.from({ length: generarEntero(5, 10) }, () =>
    new Oveja("merina", generarEntero(3, 8))
);

const cuadraConejos = Array.from({ length: generarEntero(5, 10) }, () =>
    new Conejo(["blanco", "marrón"], Math.random() > 0.5 ? "arriba" : "abajo")
);

const cuadraGallinas = Array.from({ length: generarEntero(5, 10) }, () =>
    new Gallina("blanco", generarEntero(6, 24))
);

const cuadraVacas = Array.from({ length: generarEntero(5, 10) }, () =>
    new Vaca(["marrón", "blanco"], Math.random().toFixed(2), "entera", generarEntero(5, 10))
);

const granja = {
    ovejas: cuadraOvejas,
    conejos: cuadraConejos,
    gallinas: cuadraGallinas,
    vacas: cuadraVacas,
    gallo: gallo
};

// Mostrar animales
console.log("\n===ANIMALES DE LA GRANJA ===");
for (const tipo in granja) {
    if (Array.isArray(granja[tipo])) {
        granja[tipo].forEach(a => console.log(a.toString()));
    } else {
        console.log(granja[tipo].toString());
    }
}

// Selección con lambdas
const animalesSelectos = [
    cuadraOvejas.reduce((a, b) => a.maxLeche > b.maxLeche ? a : b),
    cuadraConejos.reduce((a, b) => a.indiceAchuchabilidad > b.indiceAchuchabilidad ? a : b),
    cuadraGallinas.reduce((a, b) => a.edadMeses > b.edadMeses ? a : b),
    cuadraVacas.reduce((a, b) => a.longitudCuernos > b.longitudCuernos ? a : b)
];

console.log("\n===ANIMALES SELECTOS ===");
animalesSelectos.forEach(a => console.log(a.toString()));

