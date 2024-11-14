class ToolsService {
  constructor() {
    // URL base para la API de la FDA (de ejemplo, basada en la estructura que tienes para medicamentos)
    this.baseUrl = 'https://api.fda.gov/device/udi.json';
  }

  // Obtener herramienta médica por nombre
  async fetchToolByName(toolName) {
    try {
      const response = await fetch(`${this.baseUrl}?search=device_name:"${toolName}"`);
      const { results } = await response.json();

      // Verificar que el resultado no esté vacío
      if (results?.length) {
        const item = results[0];
        return {
          id: item.id,
          name: item.device_name || 'N/A',
          brandName: item.brand_name || 'N/A',
          purpose: item.purpose || 'Purpose information not available',
          mainComponents: item.device_class || 'Device class information not available',
          warnings: item.warnings?.join(' ') || 'No warnings available',
          usageInstructions: item.instructions_for_use || 'Usage instructions not available',
        };
      }
      console.error('No results found for the given tool name');
      return null;
    } catch (error) {
      console.error('Error fetching tool by name:', error);
      return null;
    }
  }

  // Obtener todas las herramientas médicas (con límite)
  async fetchAllTools(limit = 20) {
    try {
      const response = await fetch(`${this.baseUrl}?limit=${limit}`);
      const { results } = await response.json();

      if (results?.length) {
        return results.map(item => ({
          id: item.id,
          name: item.device_name || 'N/A',
          brandName: item.brand_name || 'N/A',
          purpose: item.purpose || 'Purpose information not available',
          mainComponents: item.device_class || 'Device class information not available',
          warnings: item.warnings?.join(' ') || 'No warnings available',
        }));
      }
      console.error('No results found');
      return [];
    } catch (error) {
      console.error('Error fetching medical tools:', error);
      return [];
    }
  }
}

export default new ToolsService();
