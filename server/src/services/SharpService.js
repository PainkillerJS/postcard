import sharp from 'sharp';
import path from 'path';
import appRootPath from 'app-root-path';

const getPath = (...names) => path.join(appRootPath.toString(), 'src', ...names);

class SharpService {
  async createIMG(url, name, lastname) {
    const svgImage = `
         <svg width="235" height="100">
            <text 
            x="50%" 
            y="50%" 
            font-family="Arial, Helvetica, sans-serif" text-anchor="middle" 
            font-size="25px"
            >${name}</text>
            
            <text 
            x="50%" 
            y="80%" 
            font-family="Arial, Helvetica, sans-serif" text-anchor="middle" 
            font-size="25px"
            >${lastname}</text>
            
         </svg>
         `;

    const svgBuffer = Buffer.from(svgImage);
    const id = Date.now();

    await sharp(getPath('assets', url))
      .composite([
        {
          input: svgBuffer,
          top: 200,
          left: 20,
        },
      ])
      .toFile(getPath('userFiles', `${id}.jpg`));

    return { id };
  }
}

export default new SharpService();
