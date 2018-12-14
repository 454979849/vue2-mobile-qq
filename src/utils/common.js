export function addClass(element, value) {
    let NewClass='';
    if (!element.className) {
        element.className = value;
    } else {
        NewClass = element.className;
        NewClass += " ";
        NewClass += value;
        element.className = NewClass;
    }
}