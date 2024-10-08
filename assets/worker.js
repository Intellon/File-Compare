self.onmessage = function(e) {
    try {
        console.log('Worker received data:', e.data);

        // Daten validieren
        if (!e.data) {
            throw new Error('No data received in worker.');
        }

        const { baseData, compareData, mappings } = e.data;

        if (!baseData || !Array.isArray(baseData)) {
            throw new Error('Invalid baseData received. Expected an array.');
        }

        if (!compareData || !Array.isArray(compareData)) {
            throw new Error('Invalid compareData received. Expected an array.');
        }

        if (!mappings || !Array.isArray(mappings) || mappings.length === 0) {
            throw new Error('Mappings data is invalid or empty.');
        }

        console.log('Data validated successfully');

        const compareMap = new Map();
        compareData.forEach(item => {
            const key = mappings.map(m => {
                if (!(m.compareColumn in item)) {
                    throw new Error(`Column "${m.compareColumn}" not found in compareData.`);
                }
                return String(item[m.compareColumn] || '').toLowerCase().replace(/['"]+/g, '').trim();
            }).join('|');
            compareMap.set(key, item);
        });

        console.log('Compare map created successfully');

        const result = baseData.filter(item => {
            const key = mappings.map(m => {
                if (!(m.baseColumn in item)) {
                    throw new Error(`Column "${m.baseColumn}" not found in baseData.`);
                }
                return String(item[m.baseColumn] || '').toLowerCase().replace(/['"]+/g, '').trim();
            }).join('|');
            return compareMap.has(key);
        });

        console.log('Result filtering completed');

        self.postMessage(result);
    } catch (error) {
        console.error('Worker error caught:', error); // Protokolliert den Fehler detailliert im Worker
        self.postMessage({ error: error.message }); // Fehler zurückgeben
    }
};
