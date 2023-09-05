import { generateImageFiles } from 'bimg';
import sharp from 'sharp';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getUserInput = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const main = async () => {
  const userInput = await getUserInput("Entre le prompt de ton image : ");
  const outputName = await getUserInput("Entre le nom de l'image : ");

  try {
    const imageFiles = await generateImageFiles(userInput);

    imageFiles.forEach(async (imageFile, index) => {
      const base64ImageData = imageFile.data;
      const outputNameIndex = outputName + index;

      const cropbase64Image = async (base64ImageData) => {
        try {
          const imageBuffer = Buffer.from(base64ImageData, 'base64');

          const imageMetadata = await sharp(imageBuffer).metadata();
          const originalWidth = imageMetadata.width;
          const originalHeight = imageMetadata.height;

          const left = 40;
          const top = 40;
          const newWidth = originalWidth - 80;
          const newHeight = originalHeight - 80;

          await sharp(imageBuffer).extract({
            left,
            top,
            width: newWidth,
            height: newHeight,
          })
          .toFile(`./imgs/${outputNameIndex}.jpeg`);

          console.log(`Image recadrée et enregistrée avec succès sous ${outputName}.jpeg`);
        } catch (error) {
          console.log('Erreur lors du recadrage de l\'image :', error);
        }
      };

      await cropbase64Image(base64ImageData);
    });
  } catch (error) {
    console.log('Erreur lors de la génération des fichiers image :', error);
  } finally {
    rl.close();
  }
};

main();