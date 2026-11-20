async function cal() {
    const math = await import('./math.js');
    let result = math.add(2,3);
    document.getElementById('add').innerHTML = `Total value: ${result}`;
}

cal();