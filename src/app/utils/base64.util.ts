export function base64ToFile(file: any): File {
  let arr = file.split(','),
    type = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    number = bstr.length,
    u8arr = new Uint8Array(number);

  while (number--) {
    u8arr[number] = bstr.charCodeAt(number);
  }

  return new File([u8arr], `avatar.png`, { type });
}

export function isBase64(str: string): boolean {
  return str?.includes('data:image');
}
