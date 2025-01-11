        // JavaScript kód a .txt fájl betöltéséhez
        fetch('eletrajz.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById('eletrajz').innerText = data;
            })
            .catch(error => console.error('Error loading the file:', error));

        fetch('balta.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById('baltaleiras').innerText = data;
            })
            .catch(error => console.error('Error loading the file:', error));

        fetch('breki.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById('brekileiras').innerText = data;
            })
            .catch(error => console.error('Error loading the file:', error));

        fetch('usanka.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById('usankaleiras').innerText = data;
            })
            .catch(error => console.error('Error loading the file:', error));

        fetch('utikalauz.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById('utikalauz').innerText = data;
            })
            .catch(error => console.error('Error loading the file:', error));
            