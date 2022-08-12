/*:
 * @plugindesc taffy游戏定制插件
 * @author 赤瞳大白猫
 *
 * @help 这个插件没有设定
 *
 */
(function() {
	const _Window_ChoiceList_updatePlacement = Window_ChoiceList.prototype.updatePlacement;
	Window_ChoiceList.prototype.updatePlacement = function() {
		_Window_ChoiceList_updatePlacement.apply(this, arguments);
		const messageY = this._messageWindow.y;
		if (messageY >= Graphics.boxHeight / 2) {
			this.y = (messageY - this.height) / 2;
		}
	};
	Drill_GFTT_Window.prototype.resetFontSettings = function() {
		Window_Base.prototype.resetFontSettings.apply(this, arguments);
		this.contents.outlineWidth = 4;
	};
	
	Drill_GFTT_Window.prototype.createContents = function() {
		this.contents = new Bitmap(this.contentsWidth(), this.contentsHeight());
		this.resetFontSettings();
	};
})();
ImageCache.prototype._truncateCache = function() {};