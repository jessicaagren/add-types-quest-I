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
    

// export const commonColor = (d: Dog[]): string => {};