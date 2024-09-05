(() => {
	// Import Settings (Cause thats all it needs)
	ModAPI.require("settings");

	// Mod Version (V.1.1)
	const modVersion = document.createElement('div');
	modVersion.style.position = 'absolute';
	modVersion.style.zIndex = '1000000';
	modVersion.style.padding = '20px';
	modVersion.style.backgroundColor = 'rgba(127.5, 127.5, 127.5, 0.5)';
	modVersion.style.color = "#ffffff";
	modVersion.style.border = '1px solid #ccc';
	modVersion.style.borderRadius = '8px';
	modVersion.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
	modVersion.style.fontFamily = 'Arial, sans-serif';
	modVersion.style.maxWidth = '300px';
	modVersion.style.right = '10px';
	modVersion.style.top = '10px';
	const versionNum = document.createElement('p');
	versionNum.innerText = "MORE_FPS V.1.1";
	modVersion.appendChild(versionNum);
	document.body.appendChild(modVersion);

	// Mod
	if (ModAPI.settings != null) {
		if ((ModAPI.getFPS() < 29)) {
			ModAPI.settings.renderDistanceChunks = 1;
			ModAPI.settings.particles = 1;
			ModAPI.settings.fog = false;
			ModAPI.settings.fancyGraphics = false;
			ModAPI.settings.viewBobbing = false;
			ModAPI.settings.hudCoords = false;
			ModAPI.settings.ambientOcclusion = 1;
			ModAPI.settings.limitFramerate = 260;
			ModAPI.settings.reload();
		} else if ((ModAPI.getFPS() > 30)) {
			ModAPI.settings.renderDistanceChunks = 4;
			ModAPI.settings.particles = 2;
			ModAPI.settings.fog = true;
			ModAPI.settings.fancyGraphics = true;
			ModAPI.settings.viewBobbing = true;
			ModAPI.settings.hudCoords = true;
			ModAPI.settings.ambientOcclusion = 2;
			ModAPI.settings.limitFramerate = 130;
			ModAPI.settings.reload();
		}
	}
})();
