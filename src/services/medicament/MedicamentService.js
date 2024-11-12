class MedicamentService {
  
  constructor() {
    this.medicaments = [];
  }

  // Método para obtener todos los medicamentos
  async fetchAllMedicaments() {
    try {
      const response = await fetch('https://api.fda.gov/drug/event.json?limit=4');
      const data = await response.json();
      
      // Extrae los datos relevantes y guárdalos en el arreglo de medicamentos
      this.medicaments = data.results.flatMap((item) =>
        item.patient.drug.map((drug) => ({
          id: item.safetyreportid, // Usa un ID único si está disponible
          name: drug.medicinalproduct, // Nombre del producto
          case: drug.drugindication, // Caso de uso
        }))
      );

      return this.medicaments; // Devuelve la lista de medicamentos obtenida
    } catch (error) {
      console.error('Error fetching medicaments:', error);
      return [];
    }
  }
}

export default new MedicamentService();
