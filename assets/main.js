function readFile(file, isBaseFile, callback) {
    const fileType = document.getElementById('fileType').value;
    if (fileType === 'excel') {
        readExcelFile(file, callback);
    } else if (fileType === 'csv') {
        const delimiter = isBaseFile
            ? document.getElementById('baseDelimiter').value || ','
            : document.getElementById('compareDelimiter').value || ',';
        readCSVFile(file, delimiter, callback);
    } else {
        alert('Please select a valid file type.');
    }
}

function readExcelFile(file, callback) {
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.SheetNames[0];
            const excelRows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet], { defval: '' });
            const headers = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet], { header: 1 })[0];

            // Clean up headers and data
            const cleanedData = excelRows.map(row => {
                const cleanedRow = {};
                Object.keys(row).forEach(key => {
                    cleanedRow[key.replace(/['"]+/g, '').trim()] = row[key];
                });
                return cleanedRow;
            });
            const cleanedHeaders = headers.map(header => header.replace(/['"]+/g, '').trim());

            callback(cleanedData, cleanedHeaders);
        } catch (error) {
            alert('Error reading the Excel file: ' + error.message);
        }
    };
    reader.onerror = () => {
        alert('Error reading the file.');
    };
    reader.readAsArrayBuffer(file);
}

function readCSVFile(file, delimiter, callback) {
    Papa.parse(file, {
        header: true,
        delimiter: delimiter,
        skipEmptyLines: true,
        dynamicTyping: true,
        complete: function (results) {
            const data = results.data;
            const headers = results.meta.fields;
            callback(data, headers);
        },
        error: function (error) {
            alert('Error reading the CSV file: ' + error.message);
        }
    });
}

function createMappingOptions() {
    const tableBody = document.querySelector('#columnMappingTable tbody');
    tableBody.innerHTML = '';

    if (baseColumnNames.length === 0 || compareColumnNames.length === 0) {
        tableBody.innerHTML += '<tr><td colspan="2">No column names found. Ensure that the files are correctly formatted.</td></tr>';
        return;
    }

    baseColumnNames.forEach((baseColumn) => {
        const row = document.createElement('tr');

        // Base column cell
        const baseCell = document.createElement('td');
        baseCell.textContent = baseColumn;

        // Dropdown for comparison column
        const select = document.createElement('select');
        select.name = 'mapping';
        select.dataset.baseColumn = baseColumn;

        // Option for no mapping
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '-- select --';
        select.appendChild(defaultOption);

        compareColumnNames.forEach(compareColumn => {
            const option = document.createElement('option');
            option.value = compareColumn;
            option.textContent = compareColumn;
            select.appendChild(option);
        });

        // Comparison column cell
        const compareCell = document.createElement('td');
        compareCell.appendChild(select);

        row.appendChild(baseCell);
        row.appendChild(compareCell);
        tableBody.appendChild(row);
    });
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (result.length === 0) {
        resultDiv.textContent = 'No matching entries found.';
        return;
    }

    const totalMatches = result.length;
    resultDiv.innerHTML = `<p>Total number of matches: ${totalMatches}</p>`;

    // Create table for results
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    // Add headers
    baseColumnNames.forEach(column => {
        const th = document.createElement('th');
        th.textContent = column;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    resultDiv.appendChild(table);

    // Parameters for lazy loading
    let currentIndex = 0;
    const batchSize = 100; // Number of rows to add per batch

    // Function to add a new batch of rows
    function addRows() {
        const fragment = document.createDocumentFragment();
        const endIndex = Math.min(currentIndex + batchSize, result.length);
        for (let i = currentIndex; i < endIndex; i++) {
            const row = document.createElement('tr');
            baseColumnNames.forEach(column => {
                const td = document.createElement('td');
                td.textContent = result[i][column] || ''; // Avoid undefined
                row.appendChild(td);
            });
            fragment.appendChild(row);
        }
        table.appendChild(fragment);
        currentIndex = endIndex;

        // Remove scroll event listener if all rows are loaded
        if (currentIndex >= result.length) {
            resultDiv.removeEventListener('scroll', onScroll);
        }
    }

    // Function to monitor scrolling and add new rows
    function onScroll() {
        if (resultDiv.scrollTop + resultDiv.clientHeight >= resultDiv.scrollHeight) {
            addRows();
        }
    }

    // Add the first batch of rows
    addRows();

    // Add scroll event listener
    resultDiv.addEventListener('scroll', onScroll);
}