(() => {
    ModAPI.require("settings");
    const optionsState = {};
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.zIndex = '1000000';
    container.style.padding = '20px';
    container.style.backgroundColor = 'rgba(127.5, 127.5, 127.5, 0.5)';
    container.style.color = "#ffffff";
    container.style.border = '1px solid #ccc';
    container.style.borderRadius = '8px';
    container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.maxWidth = '300px';
    container.style.right = '10px';
    container.style.top = '10px';
    const closeButton = document.createElement('span');
    closeButton.innerText = '[X]';
    closeButton.style.cursor = 'pointer';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.fontSize = '16px';
    closeButton.style.color = '#ff0000';
    closeButton.title = 'Close';
    closeButton.addEventListener('click', () => {
        container.style.display = 'none';
    });
    container.appendChild(closeButton);
    const options = ['Fog', 'Fancy Graphics', 'Bobbing', 'Ambient Occlusion', 'Coords', 'VSync'];
    options.forEach(option => {
        optionsState[option] = false;
        const label = document.createElement('label');
        label.style.display = 'block';
        label.style.marginBottom = '10px';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.marginRight = '10px';
        checkbox.checked = optionsState[option];
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(option));
        checkbox.addEventListener('change', function() {
            optionsState[option] = this.checked;
            console.log(`${option} is now ${this.checked ? 'enabled' : 'disabled'}`);
            ModAPI.settings.reload();
        });
        container.appendChild(label);
    });
    const testAllButton = document.createElement('button');
    testAllButton.innerText = 'Test All';
    testAllButton.style.marginTop = '10px';
    testAllButton.style.padding = '5px 10px';
    testAllButton.style.cursor = 'pointer';
    testAllButton.style.backgroundColor = '#007BFF';
    testAllButton.style.color = '#ffffff';
    testAllButton.style.border = 'none';
    testAllButton.style.borderRadius = '4px';
    testAllButton.addEventListener('click', () => {
        let alertMessage = 'Current Settings:\n';
        options.forEach(option => {
            alertMessage += `${option}: ${optionsState[option] ? 'Enabled' : 'Disabled'}\n`;
        });
        alert(alertMessage);
    });
    container.appendChild(testAllButton);
    document.body.appendChild(container);
    container.style.display = 'block';
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            container.style.display = 'block';
        }
    });
    if (ModAPI.settings != null) {
        const fps = ModAPI.getFPS();
        if (fps < 29) {
            ModAPI.settings.enableVsync = false;
            ModAPI.settings.renderDistanceChunks = 1;
            ModAPI.settings.particles = 1;
            ModAPI.settings.fog = false;
            ModAPI.settings.fancyGraphics = false;
            ModAPI.settings.viewBobbing = false;
            ModAPI.settings.hudCoords = false;
            ModAPI.settings.ambientOcclusion = 1;
            ModAPI.settings.limitFramerate = 260;
        } else if (fps > 30) {
            ModAPI.settings.enableVsync = optionsState['VSync'];
            ModAPI.settings.renderDistanceChunks = 4;
            ModAPI.settings.particles = 2;
            ModAPI.settings.fog = optionsState['Fog'];
            ModAPI.settings.fancyGraphics = optionsState['Fancy Graphics'];
            ModAPI.settings.viewBobbing = optionsState['Bobbing'];
            ModAPI.settings.hudCoords = optionsState['Coords'];
            ModAPI.settings.ambientOcclusion = optionsState['Ambient Occlusion'] ? 2 : 0;
            ModAPI.settings.limitFramerate = 130;
        }
        ModAPI.settings.reload();
    }
})();
