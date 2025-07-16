const materias = [
  {
    "id": "admin1",
    "nombre": "Administraci\u00f3n y Gesti\u00f3n de las Organizaciones I",
    "anio": 1,
    "semestre": 1,
    "previas": [],
    "creditos": 10,
    "area": "administracion"
  },
  {
    "id": "conta1",
    "nombre": "Conceptos Contables",
    "anio": 1,
    "semestre": 1,
    "previas": [],
    "creditos": 10,
    "area": "contabilidad"
  },
  {
    "id": "calculo1a",
    "nombre": "C\u00e1lculo I/A",
    "anio": 1,
    "semestre": 1,
    "previas": [],
    "creditos": 5,
    "area": "metodos"
  },
  {
    "id": "calculo1b",
    "nombre": "C\u00e1lculo I/B",
    "anio": 1,
    "semestre": 1,
    "previas": [
      "calculo1a"
    ],
    "creditos": 5,
    "area": "metodos"
  },
  {
    "id": "micro",
    "nombre": "Introducci\u00f3n a la Microeconom\u00eda",
    "anio": 1,
    "semestre": 1,
    "previas": [],
    "creditos": 10,
    "area": "economia"
  },
  {
    "id": "admin2",
    "nombre": "Administraci\u00f3n y Gesti\u00f3n de las Organizaciones II",
    "anio": 1,
    "semestre": 2,
    "previas": [
      "admin1"
    ],
    "creditos": 10,
    "area": "administracion"
  },
  {
    "id": "contaGen",
    "nombre": "Contabilidad General I",
    "anio": 1,
    "semestre": 2,
    "previas": [
      "conta1"
    ],
    "creditos": 10,
    "area": "contabilidad"
  },
  {
    "id": "ecoDesc",
    "nombre": "Econom\u00eda Descriptiva",
    "anio": 1,
    "semestre": 2,
    "previas": [],
    "creditos": 10,
    "area": "economia"
  },
  {
    "id": "sistemas",
    "nombre": "Procesos y Sistemas de Informaci\u00f3n",
    "anio": 2,
    "semestre": 1,
    "previas": [
      "admin1"
    ],
    "creditos": 10,
    "area": "administracion"
  },
  {
    "id": "macro",
    "nombre": "Macroeconom\u00eda",
    "anio": 2,
    "semestre": 1,
    "previas": [
      "micro"
    ],
    "creditos": 10,
    "area": "economia"
  },
  {
    "id": "estadistica",
    "nombre": "Introducci\u00f3n a la Estad\u00edstica",
    "anio": 2,
    "semestre": 1,
    "previas": [
      "calculo1b"
    ],
    "creditos": 10,
    "area": "metodos"
  },
  {
    "id": "derecho",
    "nombre": "Derecho del Empresario",
    "anio": 2,
    "semestre": 1,
    "previas": [],
    "creditos": 10,
    "area": "juridica"
  },
  {
    "id": "rrhh",
    "nombre": "Administraci\u00f3n de Recursos Humanos",
    "anio": 2,
    "semestre": 2,
    "previas": [
      "admin2"
    ],
    "creditos": 10,
    "area": "administracion"
  },
  {
    "id": "matFin",
    "nombre": "Matem\u00e1tica Financiera",
    "anio": 2,
    "semestre": 2,
    "previas": [
      "calculo1b"
    ],
    "creditos": 10,
    "area": "metodos"
  },
  {
    "id": "marketing",
    "nombre": "Marketing B\u00e1sico",
    "anio": 3,
    "semestre": 1,
    "previas": [],
    "creditos": 10,
    "area": "administracion"
  },
  {
    "id": "costos",
    "nombre": "Costos para la Gesti\u00f3n",
    "anio": 3,
    "semestre": 1,
    "previas": [],
    "creditos": 10,
    "area": "contabilidad",
    "creditosNecesarios": 80
  },
  {
    "id": "ecoEmp",
    "nombre": "Econom\u00eda de las Decisiones Empresariales",
    "anio": 3,
    "semestre": 1,
    "previas": [
      "macro",
      "matFin"
    ],
    "creditos": 10,
    "area": "economia"
  },
  {
    "id": "etica",
    "nombre": "Taller de \u00c9tica y Responsabilidad Social",
    "anio": 3,
    "semestre": 1,
    "previas": [
      "sistemas"
    ],
    "creditos": 5,
    "area": "actividades"
  },
  {
    "id": "contaG",
    "nombre": "Contabilidad Gerencial",
    "anio": 3,
    "semestre": 2,
    "previas": [
      "costos",
      "matFin"
    ],
    "creditos": 10,
    "area": "contabilidad",
    "creditosNecesarios": 160
  },
  {
    "id": "relLab",
    "nombre": "Administraci\u00f3n de las Relaciones del Trabajo",
    "anio": 3,
    "semestre": 2,
    "previas": [],
    "creditos": 10,
    "area": "ciencias_sociales",
    "areaCreditos": {
      "juridica": 15
    }
  },
  {
    "id": "comport",
    "nombre": "Comportamiento Organizacional",
    "anio": 4,
    "semestre": 1,
    "previas": [],
    "creditos": 10,
    "area": "administracion",
    "creditosNecesarios": 170
  },
  {
    "id": "finanzas",
    "nombre": "Finanzas Corporativas",
    "anio": 4,
    "semestre": 1,
    "previas": [
      "admin2",
      "matFin",
      "estadistica"
    ],
    "creditos": 10,
    "area": "administracion",
    "creditosNecesarios": 180,
    "areaCreditos": {
      "contabilidad": 40,
      "economia": 30
    }
  },
  {
    "id": "estrategia",
    "nombre": "Direcci\u00f3n Estrat\u00e9gica de Empresas",
    "anio": 4,
    "semestre": 2,
    "previas": [
      "finanzas",
      "marketing"
    ],
    "creditos": 10,
    "area": "administracion"
  },
  {
    "id": "cambio",
    "nombre": "Cambio Organizacional",
    "anio": 4,
    "semestre": 2,
    "previas": [],
    "creditos": 10,
    "area": "administracion",
    "creditosNecesarios": 180
  },
  {
    "id": "proyectos",
    "nombre": "Proyectos de Inversi\u00f3n",
    "anio": 4,
    "semestre": 2,
    "previas": [
      "finanzas"
    ],
    "creditos": 10,
    "area": "administracion",
    "creditosNecesarios": 270,
    "areaCreditos": {
      "economia": 30
    }
  }
];

