(() => {
	ModAPI.require("settings");
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
