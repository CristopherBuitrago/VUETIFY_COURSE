class MedicamentService {

  constructor() {
    this.baseUrl = 'https://api.fda.gov/drug/label.json';
  }

  // Obtener medicamento por nombre
  async fetchMedicamentById(drugName) {
    try {
      const response = await fetch(`${this.baseUrl}?search=openfda.brand_name:"${drugName}"`);
      const { results } = await response.json();

      // verificar que el resultado no este vacio
      if (results?.length) {
        const item = results[0];
        return {
          id: item.id,
          name: item.openfda.generic_name?.[0] || 'N/A',
          brandName: item.openfda.brand_name?.[0] || 'N/A',
          purpose: item.purpose?.[0] || 'No purpose information available',
          activeIngredient: item.active_ingredient?.join(', ') || 'No active ingredients available',
          warnings: item.warnings?.join(' ') || 'No warnings available',
          dosage: item.dosage_and_administration?.join(' ') || 'Dosage information not available',
        };
      }
      console.error('No results found for the given drug name');
      return null;
    } catch (error) {
      console.error('Error fetching medicament by ID:', error);
      return null;
    }
  }

  // Obtener medicamentos
  async fetchAllMedicaments(limit = 10) {
    try {
      const response = await fetch(`${this.baseUrl}?limit=${limit}`);
      const { results } = await response.json();  

      if (results?.length) {
        return results.map(item => ({
          id: item.id,
          name: item.openfda.generic_name?.[0] || 'N/A',
          brandName: item.openfda.brand_name?.[0] || 'N/A',
          purpose: item.purpose?.[0] || 'No purpose information available',
          activeIngredient: item.active_ingredient?.join(', ') || 'No active ingredients available',
          warnings: item.warnings?.join(' ') || 'No warnings available',
        }));
      }
      console.error('No results found');
      return [];
    } catch (error) {
      console.error('Error fetching medicaments:', error);
      return [];
    }
  }
}

export default new MedicamentService();
