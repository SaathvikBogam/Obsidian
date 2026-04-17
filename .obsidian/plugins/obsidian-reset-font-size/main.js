'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const DEFAULT_SETTINGS = {
    defaultBaseFontSize: 16,
    ribbonIcon: true,
    resetGlobalZoomFactor: true
};
class ResetFontSizePlugin extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        this.ribbonIconEl = undefined;
        this.refreshRibbonIcon = () => {
            var _a;
            (_a = this.ribbonIconEl) === null || _a === void 0 ? void 0 : _a.remove();
            if (this.settings.ribbonIcon) {
                this.ribbonIconEl = this.addRibbonIcon('uppercase-lowercase-a', 'Reset Font Size', () => this.doReset());
            }
        };
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('loading %s plugin', this.manifest.name);
            yield this.loadSettings();
            this.addCommand({
                id: 'reset-font-size',
                name: 'Reset',
                callback: () => this.doReset()
            });
            this.refreshRibbonIcon();
            this.addSettingTab(new ResetFontSizeSettingsTab(this.app, this));
        });
    }
    onunload() {
        console.log('unloading %s plugin', this.manifest.name);
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
    doReset() {
        // console.log('resetting font size to: %d', this.settings.defaultBaseFontSize);
        //@ts-ignore
        this.app.vault.setConfig('baseFontSize', this.settings.defaultBaseFontSize);
        this.app.updateFontSize();
        if (this.settings.resetGlobalZoomFactor && obsidian.Platform.isDesktop) {
            // console.log('setting global zoomFactor to 1');
            // require("electron").webFrame.setZoomFactor(1); // deprecated, non-persistent
            const BrowserWindow = require('electron').remote.BrowserWindow;
            const win = BrowserWindow.getFocusedWindow();
            win.webContents.zoomFactor = 1.0;
        }
    }
}
class ResetFontSizeSettingsTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.curSize = document.createElement('b');
        this.plugin = plugin;
    }
    display() {
        let { containerEl } = this;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Reset Font Size Settings' });
        let desc = document.createDocumentFragment();
        desc.append(`Size to revert to when invoking the reset command (default: ${String(DEFAULT_SETTINGS.defaultBaseFontSize)})`);
        desc.createEl("br");
        desc.append('Current setting: ');
        desc.appendChild(this.curSize);
        this.updateSettingsDesc();
        new obsidian.Setting(containerEl)
            .setName('Default Font Size')
            .setDesc(desc)
            .addSlider((slider) => {
            slider
                .setDynamicTooltip()
                .setLimits(10, 30, 1)
                .setValue(this.plugin.settings.defaultBaseFontSize)
                .onChange((new_value) => {
                this.plugin.settings.defaultBaseFontSize = new_value;
                this.updateSettingsDesc();
                this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Reset global app zoom level')
            .setDesc('Enable to also reset global webFrame ZoomFactor (Desktop only).')
            .addToggle((toggle) => toggle
            .setValue(this.plugin.settings.resetGlobalZoomFactor)
            .onChange((value) => {
            this.plugin.settings.resetGlobalZoomFactor = value;
            this.plugin.saveSettings();
        }));
        new obsidian.Setting(containerEl)
            .setName('Show Ribbon Icon')
            .setDesc('Toggle the display of the Ribbon Icon.')
            .addToggle((toggle) => toggle
            .setValue(this.plugin.settings.ribbonIcon)
            .onChange((value) => {
            this.plugin.settings.ribbonIcon = value;
            this.plugin.saveSettings();
            this.plugin.refreshRibbonIcon();
        }));
    }
    updateSettingsDesc() {
        this.curSize.innerText = String(this.plugin.settings.defaultBaseFontSize);
    }
}

module.exports = ResetFontSizePlugin;


/* nosourcemap */