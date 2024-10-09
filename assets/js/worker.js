self.onmessage = function(e) {
    try {
        console.log('Worker received data:', e.data);

        if (!e.data) {
            console.error('No data received in worker.');
            return;
        }

        const { baseData, compareData, mappings } = e.data;

        if (!baseData || !Array.isArray(baseData)) {
            console.error('Invalid baseData received. Expected an array.');
            return;
        }

        if (!compareData || !Array.isArray(compareData)) {
            console.error('Invalid compareData received. Expected an array.');
            return;
        }

        if (!mappings || !Array.isArray(mappings) || mappings.length === 0) {
            console.error('Mappings data is invalid or empty.');
            return;
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
        console.error('Worker error caught:', error);
        self.postMessage({ error: error.message });
    }
};
