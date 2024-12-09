import Dog from "./dog";

export const numberOfColors = (d: Dog[]): number => {
    const uniqueColors: string[] = [];
    d.forEach(dog => {
        let isUnique = true;
        uniqueColors.forEach(color => {
          if (dog.color === color) {
            isUnique = false;
          }
        });
        if (isUnique) {
          uniqueColors.push(dog.color);
        }
      });
      return uniqueColors.length;
    };
    

export const commonColor = (d: Dog[]): string => {
    const colorCount: { [color: string]: number } = {};

    d.forEach(dog => {
        if (!colorCount[dog.color]) {
            colorCount[dog.color] = 1;
        }
        else {
            colorCount[dog.color]++;
        }
    });

    let commonColorString: string = "";
    let commonColorCount: number = 0;

    for (const color in colorCount) {
        if (colorCount[color] > commonColorCount) {
          commonColorCount = colorCount[color];
          commonColorString = color;
        }
      }
      return commonColorString;
};

export const prettyPrintDogs = (d: Dog[]) => {
    const colorCount: { [color: string]: number } = {};
    
    console.log("Alla färger som hundarna har:");
    d.forEach(dog => {
        if (!colorCount[dog.color]) {
            colorCount[dog.color] = 1;
        }
        else {
            colorCount[dog.color] += 1;
        }
        })

        for (const color in colorCount) {
            console.log(`${color}: ${colorCount[color]}`);
        }
        
    };

    // Antal unika färger enligt Niklas
    export const numberOfColors2 = (dogs: Dog[]): number => {
        const colors: string[] = [];

        dogs.forEach(dog => {
            const thisColor = dog.color;
            const index = colors.indexOf(thisColor);
            if(index === -1)
                colors.push(dog.color);
        });
        return colors.length;
    }