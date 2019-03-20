const qs = (arr, l, r) => {
  if (l > r) return;
  let left = l;
  let right = r;

  let middle = arr[left];

  while(left < right) {
    while (left < right && arr[right] >= middle ) {
      right--;
    }

    while (left < right && arr[left] <= middle) {
      left++;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }

  [arr[l], arr[right]] = [arr[right], arr[l]];
  qs(arr, l, right - 1);
  qs(arr, left + 1, r);
}

//test
const test = [2,1,3,6,4];
qs(test, 0, 4)
console.log(test);