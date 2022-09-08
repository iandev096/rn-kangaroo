export function isLastItem(index: number, arr: any[]) {
  if (index === arr.length - 1) {
    return true;
  }
  return false;
}

export function isFirstItem(index: number) {
  if (index === 0) {
    return true;
  }
  return false;
}
