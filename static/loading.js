window.addEventListener('load', function() {
            document.getElementById('loading-screen').style.opacity = '0';
            setTimeout(function() {
                document.getElementById('loading-screen').style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
            }, 500); 
        });
