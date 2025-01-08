function save(item) {
    console.log(item); // Object
    let val = JSON.stringify(item);
    console.log(val); // JSON (String)
    localStorage.setItem('services', val);
}