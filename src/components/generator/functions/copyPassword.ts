export const copyPassword = (value: string) => {
   if (value.trim().length > 0) {
      navigator.clipboard.writeText(value).catch((err) => {
         console.log('Error', err);
      });
   }
};