import fs from "fs/promises";

export class FileService {
  // Lê o conteúdo de um arquivo JSON
  static async readFile(filePath: string): Promise<any> {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error(`Erro ao ler o arquivo ${filePath}:`, error);
      throw new Error("Erro ao ler o arquivo.");
    }
  }

  // Escreve no arquivo JSON
  static async writeFile(filePath: string, content: any): Promise<void> {
    try {
      const data = JSON.stringify(content, null, 2); // Indentação para manter legível
      await fs.writeFile(filePath, data, "utf-8");
    } catch (error) {
      console.error(`Erro ao escrever no arquivo ${filePath}:`, error);
      throw new Error("Erro ao salvar o arquivo.");
    }
  }
}
