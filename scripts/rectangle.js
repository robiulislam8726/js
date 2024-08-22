function calculateRectangleArea(){
    // Get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.Value;
    const length = parseFloat(lengthText);
    console.log(length);
    // Get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);
    //calculate rectangle area
    const area = 0.5 * length * width ;
    console.log('area of the rectangle:', area);

    //display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}