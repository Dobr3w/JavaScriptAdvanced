function generateReport() {
    let headers = Array.from(document.querySelectorAll('table thead tr th'));
    let selectedColumns = headers.map((th, index) => ({ index, checked: th.children[0].checked, propName: th.getAttribute('name') }))
                                  .filter(col => col.checked);

    let rows = Array.from(document.querySelectorAll('table tbody tr'));
    let report = rows.map(row => {
        let obj = {};
        selectedColumns.forEach(col => {
            let cell = row.cells[col.index].textContent;
            obj[col.propName] = cell;
        });
        return obj;
    });

    let jsonOutput = JSON.stringify(report, null, 4); // Pretty print the JSON
    document.getElementById('output').value = jsonOutput;
}