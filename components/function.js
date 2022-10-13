export function stepperInput(id, s, m) {
    var el = document.getElementById(id);
    if (s > 0) {
      if (parseInt(el.value) < m) {
        el.value = parseInt(el.value) + s;
      }
    } else {
      if (parseInt(el.value) > m) {
        el.value = parseInt(el.value) ;
      }
    }
  }
