//=============================================================================
// Ryusa_FootstepSE.js
//=============================================================================
/*:
 * Version: 1.2 CHN
 * @plugindesc Ryusa 脚步声系统
 * 角色移动时响应播放脚步声
 * @author TsunetakaRyu : Ryusa Works
 *
 * @param Function Switch
 * @desc 设置一个开关用于控制该插件是否工作
 * （填入数字）
 * @default 24
 *
 * @param Displaying Log
 * @desc 如果填“是”则将在控制台显示调试信息
 * （填入 true 或 false）
 * @default false
 *
 * @param Use Region ID
 * @desc 如果有些插件已经占用了地形 ID，你可以选择使用区域 ID
 * （填入 true 或 false）
 * @default false
 *
 * @param Basic Volume
 * @desc 为脚步声设置一个基准音量
 * (填入 0~100 以内的数字)
 * @default 25
 *
 * @param Ceiling
 * @desc 为脚步声的音量设置一个上限值，配合机关枪现象抑制功能使用
 * (填入 0~100 以内的数字)
 * @default 30
 *
 * @param N Steps for 1 Sound when Dashing
 * @desc 如果角色处于冲刺状态，间隔多少步才播放一次脚步声？*
 * （填入 1~128 以内的数字；*请在帮助信息查看详情）
 * @default 2
 *
 * @param N Steps for 1 Sound when Walking
 * @desc 类似于前者，移动状态如果脚步声过于频繁，请修改这里*
 * （填入 1~128 以内的数字；*请在帮助信息查看详情）
 * @default 1
 *
 * @param Enable Anti-Machinegun Effects
 * @desc 机关枪现象抑制功能。如果启用，则实际脚步声音量会上下浮动，避免产生“哒哒哒哒”的重复声音
 * （填入 true 或 false）
 * @default true
 *
 * @param Anti-Machinegun Level
 * @desc 设置上下浮动水平，该参数仅当上一项填 true 时有效
 * （填入 5~25 以内的数字）
 * @default 15
 *
 * @param AnalogMove Patch
 * @desc 如果您使用 Sanshiro 的 AnalogMove 插件，请启用
 * （填 true 或 false）
 * @default false
 *
 * @param --------
 * @desc 分割线
 * @default --------
 *
 * @param Region or Terrain ID as Grass
 * @desc 视为草地的地形或区域 ID
 * @default 1
 *
 * @param Region or Terrain ID as Sand
 * @desc 视为沙地的地形或区域 ID
 * @default 2
 *
 * @param Region or Terrain ID as Snow
 * @desc 视为雪地的地形或区域 ID
 * @default 3
 *
 * @param Region or Terrain ID as Wood
 * @desc 视为木板路的地形或区域 ID
 * @default 4
 *
 * @param Region or Terrain ID as Water
 * @desc 视为浅滩的地形或区域 ID
 * @default 5
 *
 * @param Region or Terrain ID as Stone
 * @desc 视为石板路的地形或区域 ID
 * @default 6
 *
 * @param Region or Terrain ID as Metal
 * @desc 视为金属路的地形或区域 ID
 * @default 7
 *
 * @param Region or Terrain ID as Optional I
 * @desc 视为自定义Ⅰ型的地形或区域 ID
 * @default 8
 *
 * @param Region or Terrain ID as Optional II
 * @desc 视为自定义Ⅱ型的地形或区域 ID
 * @default 9
 *
 * @param Region or Terrain ID as Optional III
 * @desc 视为自定义Ⅲ的地形或区域 ID
 * @default 10
 *
 * @param --------
 * @desc 分割线
 * @default --------
 *
 * @param Grass Sample #1
 * @desc 草地的脚步声素材
 * @default fst_grass_light_walk_001
 *
 * @param Grass Sample #2
 * @desc 草地的脚步声素材
 * @default fst_grass_light_walk_002
 *
 * @param Grass Sample #3
 * @desc 草地的脚步声素材
 * @default fst_grass_light_walk_003
 *
 * @param Grass Sample #4
 * @desc 草地的脚步声素材
 * @default fst_grass_light_walk_004
 *
 * @param Grass Sample #5
 * @desc 草地的脚步声素材
 * @default fst_grass_light_walk_005
 *
 * @param Grass Sample #6
 * @desc 草地的脚步声素材
 * @default fst_grass_light_walk_006
 *
 * @param Grass Sample #7
 * @desc 草地的脚步声素材
 * @default
 *
 * @param Grass Sample #8
 * @desc 草地的脚步声素材
 * @default
 *
 * @param Grass Sample #9
 * @desc 草地的脚步声素材
 * @default
 *
 * @param Grass Sample #10
 * @desc 草地的脚步声素材
 * @default
 *
 * @param --------
 * @desc 分割线
 * @default --------
 *
 * @param Sand Sample #1
 * @desc 沙地的脚步声素材
 * @default fst_sand_light_walk_001
 *
 * @param Sand Sample #2
 * @desc 沙地的脚步声素材
 * @default fst_sand_light_walk_002
 *
 * @param Sand Sample #3
 * @desc 沙地的脚步声素材
 * @default fst_sand_light_walk_003
 *
 * @param Sand Sample #4
 * @desc 沙地的脚步声素材
 * @default fst_sand_light_walk_004
 *
 * @param Sand Sample #5
 * @desc 沙地的脚步声素材
 * @default fst_sand_light_walk_005
 *
 * @param Sand Sample #6
 * @desc 沙地的脚步声素材
 * @default fst_sand_light_walk_006
 *
 * @param Sand Sample #7
 * @desc 沙地的脚步声素材
 * @default
 *
 * @param Sand Sample #8
 * @desc 沙地的脚步声素材
 * @default
 *
 * @param Sand Sample #9
 * @desc 沙地的脚步声素材
 * @default
 *
 * @param Sand Sample #10
 * @desc 沙地的脚步声素材
 * @default
 *
 * @param --------
 * @desc 分割线
 * @default --------
 *
 * @param Snow Sample #1
 * @desc 雪地的脚步声素材
 * @default fst_light_snow_walk_001
 *
 * @param Snow Sample #2
 * @desc 雪地的脚步声素材
 * @default fst_light_snow_walk_002
 *
 * @param Snow Sample #3
 * @desc 雪地的脚步声素材
 * @default fst_light_snow_walk_003
 *
 * @param Snow Sample #4
 * @desc 雪地的脚步声素材
 * @default fst_light_snow_walk_004
 *
 * @param Snow Sample #5
 * @desc 雪地的脚步声素材
 * @default fst_light_snow_walk_005
 *
 * @param Snow Sample #6
 * @desc 雪地的脚步声素材
 * @default fst_light_snow_walk_006
 *
 * @param Snow Sample #7
 * @desc 雪地的脚步声素材
 * @default
 *
 * @param Snow Sample #8
 * @desc 雪地的脚步声素材
 * @default
 *
 * @param Snow Sample #9
 * @desc 雪地的脚步声素材
 * @default
 *
 * @param Snow Sample #10
 * @desc 雪地的脚步声素材
 * @default
 *
 * @param --------
 * @desc 分割线
 * @default --------
 *
 * @param Wood Sample #1
 * @desc 木板路的脚步声素材
 * @default fst_wood_light_walk_001
 *
 * @param Wood Sample #2
 * @desc 木板路的脚步声素材
 * @default fst_wood_light_walk_002
 *
 * @param Wood Sample #3
 * @desc 木板路的脚步声素材
 * @default fst_wood_light_walk_003
 *
 * @param Wood Sample #4
 * @desc 木板路的脚步声素材
 * @default fst_wood_light_walk_004
 *
 * @param Wood Sample #5
 * @desc 木板路的脚步声素材
 * @default fst_wood_light_walk_005
 *
 * @param Wood Sample #6
 * @desc 木板路的脚步声素材
 * @default fst_wood_light_walk_006
 *
 * @param Wood Sample #7
 * @desc 木板路的脚步声素材
 * @default
 *
 * @param Wood Sample #8
 * @desc 木板路的脚步声素材
 * @default
 *
 * @param Wood Sample #9
 * @desc 木板路的脚步声素材
 * @default
 *
 * @param Wood Sample #10
 * @desc 木板路的脚步声素材
 * @default
 *
 * @param --------
 * @desc 分割线
 * @default --------
 *
 * @param Water Sample #1
 * @desc 浅滩的脚步声素材
 * @default fst_water_heavy_run_001
 *
 * @param Water Sample #2
 * @desc 浅滩的脚步声素材
 * @default fst_water_heavy_run_002
 *
 * @param Water Sample #3
 * @desc 浅滩的脚步声素材
 * @default fst_water_heavy_run_003
 *
 * @param Water Sample #4
 * @desc 浅滩的脚步声素材
 * @default
 *
 * @param Water Sample #5
 * @desc 浅滩的脚步声素材
 * @default
 *
 * @param Water Sample #6
 * @desc 浅滩的脚步声素材
 * @default
 *
 * @param Water Sample #7
 * @desc 浅滩的脚步声素材
 * @default
 *
 * @param Water Sample #8
 * @desc 浅滩的脚步声素材
 * @default
 *
 * @param Water Sample #9
 * @desc 浅滩的脚步声素材
 * @default
 *
 * @param Water Sample #10
 * @desc 浅滩的脚步声素材
 * @default
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Stone Sample #1
 * @desc 石板路的脚步声素材
 * @default fst_stone_light_walk_001
 *
 * @param Stone Sample #2
 * @desc 石板路的脚步声素材
 * @default fst_stone_light_walk_002
 *
 * @param Stone Sample #3
 * @desc 石板路的脚步声素材
 * @default fst_stone_light_walk_003
 *
 * @param Stone Sample #4
 * @desc 石板路的脚步声素材
 * @default
 *
 * @param Stone Sample #5
 * @desc 石板路的脚步声素材
 * @default
 *
 * @param Stone Sample #6
 * @desc 石板路的脚步声素材
 * @default
 *
 * @param Stone Sample #7
 * @desc 石板路的脚步声素材
 * @default
 *
 * @param Stone Sample #8
 * @desc 石板路的脚步声素材
 * @default
 *
 * @param Stone Sample #9
 * @desc 石板路的脚步声素材
 * @default
 *
 * @param Stone Sample #10
 * @desc 石板路的脚步声素材
 * @default
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Metal Sample #1
 * @desc 金属路的脚步声素材
 * @default fst_metal_light_walk_001
 *
 * @param Metal Sample #2
 * @desc 金属路的脚步声素材
 * @default fst_metal_light_walk_002
 *
 * @param Metal Sample #3
 * @desc 金属路的脚步声素材
 * @default fst_metal_light_walk_003
 *
 * @param Metal Sample #4
 * @desc 金属路的脚步声素材
 * @default fst_metal_light_walk_004
 *
 * @param Metal Sample #5
 * @desc 金属路的脚步声素材
 * @default fst_metal_light_walk_005
 *
 * @param Metal Sample #6
 * @desc 金属路的脚步声素材
 * @default fst_metal_light_walk_006
 *
 * @param Metal Sample #7
 * @desc 金属路的脚步声素材
 * @default
 *
 * @param Metal Sample #8
 * @desc 金属路的脚步声素材
 * @default
 *
 * @param Metal Sample #9
 * @desc 金属路的脚步声素材
 * @default
 *
 * @param Metal Sample #10
 * @desc 金属路的脚步声素材
 * @default
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Optional I Sample #1
 * @desc 自定义I型的脚步声素材
 * @default
 *
 * @param Optional I Sample #2
 * @desc 自定义I型的脚步声素材
 * @default
 *
 * @param Optional I Sample #3
 * @desc 自定义I型的脚步声素材
 * @default
 *
 * @param Optional I Sample #4
 * @desc 自定义I型的脚步声素材
 * @default
 *
 * @param Optional I Sample #5
 * @desc 自定义I型的脚步声素材
 * @default
 *
 * @param Optional I Sample #6
 * @desc 自定义I型的脚步声素材
 * @default
 *
 * @param Optional I Sample #7
 * @desc 自定义I型的脚步声素材
 * @default
 *
 * @param Optional I Sample #8
 * @desc 自定义I型的脚步声素材
 * @default
 *
 * @param Optional I Sample #9
 * @desc 自定义I型的脚步声素材
 * @default
 *
 * @param Optional I Sample #10
 * @desc 自定义I型的脚步声素材
 * @default
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Optional II Sample #1
 * @desc 自定义Ⅱ型的脚步声素材
 * @default
 *
 * @param Optional II Sample #2
 * @desc 自定义Ⅱ型的脚步声素材
 * @default
 *
 * @param Optional II Sample #3
 * @desc 自定义Ⅱ型的脚步声素材
 * @default
 *
 * @param Optional II Sample #4
 * @desc 自定义Ⅱ型的脚步声素材
 * @default
 *
 * @param Optional II Sample #5
 * @desc 自定义Ⅱ型的脚步声素材
 * @default
 *
 * @param Optional II Sample #6
 * @desc 自定义Ⅱ型的脚步声素材
 * @default
 *
 * @param Optional II Sample #7
 * @desc 自定义Ⅱ型的脚步声素材
 * @default
 *
 * @param Optional II Sample #8
 * @desc 自定义Ⅱ型的脚步声素材
 * @default
 *
 * @param Optional II Sample #9
 * @desc 自定义Ⅱ型的脚步声素材
 * @default
 *
 * @param Optional II Sample #10
 * @desc 自定义Ⅱ型的脚步声素材
 * @default
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Optional III Sample #1
 * @desc 自定义Ⅲ型的脚步声素材
 * @default
 *
 * @param Optional III Sample #2
 * @desc 自定义Ⅲ型的脚步声素材
 * @default
 *
 * @param Optional III Sample #3
 * @desc 自定义Ⅲ型的脚步声素材
 * @default
 *
 * @param Optional III Sample #4
 * @desc 自定义Ⅲ型的脚步声素材
 * @default
 *
 * @param Optional III Sample #5
 * @desc 自定义Ⅲ型的脚步声素材
 * @default
 *
 * @param Optional III Sample #6
 * @desc 自定义Ⅲ型的脚步声素材
 * @default
 *
 * @param Optional III Sample #7
 * @desc 自定义Ⅲ型的脚步声素材
 * @default
 *
 * @param Optional III Sample #8
 * @desc 自定义Ⅲ型的脚步声素材
 * @default
 *
 * @param Optional III Sample #9
 * @desc 自定义Ⅲ型的脚步声素材
 * @default
 *
 * @param Optional III Sample #10
 * @desc 自定义Ⅲ型的脚步声素材
 * @default
 * ===========================================================================
 * @help Ryusa 脚步声系统
 * 角色移动时响应播放脚步声
 * 作者：TsunetakaRyu / Ryusa Works
 * 特别感谢：llllllama、Mr-Liu（过眼烟云）、Sanshiro
 *
 * 特性：
 * 实现了不同的地图标识响应不同的脚步声
 * 同类脚步声随机化，区别于 VA 版，新增了 Round-Robin 方法进行了相邻去重复处理
 * 即使脚步声素材很少，启用机关枪现象抑制之后能降低不自然感
 *
 * 使用方法：
 * 双击参数项，查看具体描述，里面写的都很清楚。
 * 在参数项中根据描述可以自行配置，该插件默认利用地形 ID（因为优先级更高更省事）以区分不同地形。
 * 考虑到可能有些插件会占用到地形 ID，您也可以选择使用区域 ID，也就是画图里面的 R。
 * 范例提供的素材应该足够用了，如果觉得还不够的话可以自行放到 Audio\se 目录内，然后在参数项进行配置即可。
 * 默认参数下，ID 对应的地形如下：
 * 1 - 草地
 * 2 - 沙地
 * 3 - 雪地
 * 4 - 木质地板
 * 5 - 水面、浅滩
 * 6 - 较松软的石质地板
 * 7 - 金属表面，也可以作为大理石地板使用
 *
 * 注意事项：
 * 可能依旧存在脚步声与画面不同步的问题，即使在 1.1 版微调了部分参数之后依然如此。
 * 因而作者强烈推荐 Sanshiro 制作的 AnalogMove 插件，与之配合使用：
 * http://forums.rpgmakerweb.com/index.php?/topic/49828-analog-move/
 *
 * 在配合 AnalogMove 插件使用时，因为对部分代码进行了重写，请为 AnalogMove Patch 填入 true，并将 AnalogMove 插件放在本插件之前。
 * 为了兼容 Sanshiro 的 AnalogMove 插件，对部分参数进行了锁定。
 * 一旦启用了 AnalogMove 插件，且该插件处于激活状态时，
 * N Steps for 1 Sound when Dashing
 * N Steps for 1 Sound when Walking
 * 此时在这两项填入的参数失效。
 *
 * 更新记录：
 * 1.2 将可选地形扩展到 10 种，有三种可由用户自定义。
 * 1.1 代码精简；微调了部分默认参数。
 * 1.0 兼容了 Sanshiro 的 AnalogMove 插件。
 *
 * 素材来源声明
 * 整合自《上古卷轴Ⅴ：天际》的 "IMMERSIVE SOUNDS - COMPENDIUM" MOD 资源包 by lazygecko
 * 原素材（脚步声部分）来自 freesound.org 的如下贡献者：
 * ABouch, Halleck, DasDeer, Corsica-S, ddunkley, nickb1608, mallement, Vosvoy, RutgerMuller, jwb4, cheeseheadburger, martinimeniscus
 *
 * ==========
 * Ryusa Works 插件作品
 * http://www.star01.net/channel/1070
 * ==========
 */
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Ryusa_FootstepSE = 1.02;
var RyusaWorks = RyusaWorks || {};
RyusaWorks.Ryusa_FootstepSE = RyusaWorks.Ryusa_FootstepSE || {};

//-----------------------------------------------------------------------------
// 主处理
//-----------------------------------------------------------------------------
function Ryusa_Footstep_SE() {
    throw new Error('Speical thanks to: llllllama, Mr-Liu and Sanshiro.');
}

var parameters = PluginManager.parameters('Ryusa_FootstepSE');
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE._debug = Boolean(parameters['Displaying Log'] == 'true');
Ryusa_Footstep_SE._switch = Number(parameters['Function Switch']);
Ryusa_Footstep_SE._use_region_id = Boolean(parameters['Use Region ID'] == 'true');
Ryusa_Footstep_SE._basic_volume = Number(parameters['Basic Volume']);
Ryusa_Footstep_SE._Ceiling = Number(parameters['Ceiling']);
Ryusa_Footstep_SE._dashing_hotfix = Number(parameters['N Steps for 1 Sound when Dashing']);
Ryusa_Footstep_SE._walking_hotfix = Number(parameters['N Steps for 1 Sound when Walking']);
Ryusa_Footstep_SE._walking_phase = Number(parameters['Walking Phase Adjusting']);
Ryusa_Footstep_SE._enable_anti_machinegun = Boolean(parameters['Enable Anti-Machinegun Effects'] == 'true');
Ryusa_Footstep_SE._anti_machinegun_value = Number(parameters['Anti-Machinegun Level']);
Ryusa_Footstep_SE._analogmove_patch = Boolean(parameters['AnalogMove Patch']);
//Ryusa_Footstep_SE._cloth_type = Number(parameters['Armor Type ID for Cloth']);
//Ryusa_Footstep_SE._lightarmor_type = Number(parameters['Armor Type ID for Light Armor']);
//Ryusa_Footstep_SE._heavyarmor_type = Number(parameters['Armor Type ID for Heavy Armor']);
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE._id_as_grass = Number(parameters['Region or Terrain ID as Grass']);
Ryusa_Footstep_SE._id_as_sand  = Number(parameters['Region or Terrain ID as Sand']);
Ryusa_Footstep_SE._id_as_snow  = Number(parameters['Region or Terrain ID as Snow']);
Ryusa_Footstep_SE._id_as_wood  = Number(parameters['Region or Terrain ID as Wood']);
Ryusa_Footstep_SE._id_as_water = Number(parameters['Region or Terrain ID as Water']);
Ryusa_Footstep_SE._id_as_stone = Number(parameters['Region or Terrain ID as Stone']);
Ryusa_Footstep_SE._id_as_metal = Number(parameters['Region or Terrain ID as Metal']);
Ryusa_Footstep_SE._id_as_opti  = Number(parameters['Region or Terrain ID as Optional I'])
Ryusa_Footstep_SE._id_as_optii = Number(parameters['Region or Terrain ID as Optional II'])
Ryusa_Footstep_SE._id_as_optiii= Number(parameters['Region or Terrain ID as Optional III'])
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE._grass_samples = [];
Ryusa_Footstep_SE._valid_samples_of_grass = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._grass_samples[i] = String(parameters['Grass Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._sand_samples = [];
Ryusa_Footstep_SE._valid_samples_of_sand = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._sand_samples[i] = String(parameters['Sand Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._snow_samples = [];
Ryusa_Footstep_SE._valid_samples_of_snow = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._snow_samples[i] = String(parameters['Snow Sample #'+(i+1)])
};
Ryusa_Footstep_SE._wood_samples = [];
Ryusa_Footstep_SE._valid_samples_of_wood = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._wood_samples[i] = String(parameters['Wood Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._water_samples = [];
Ryusa_Footstep_SE._valid_samples_of_water = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._water_samples[i] = String(parameters['Water Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._stone_samples = [];
Ryusa_Footstep_SE._valid_samples_of_stone = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._stone_samples[i] = String(parameters['Stone Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._metal_samples = [];
Ryusa_Footstep_SE._valid_samples_of_metal = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._metal_samples[i] = String(parameters['Metal Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._opti_samples = [];
Ryusa_Footstep_SE._valid_samples_of_opti = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._opti_samples[i] = String(parameters['Optional I Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._optii_samples = [];
Ryusa_Footstep_SE._valid_samples_of_optii = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._optii_samples[i] = String(parameters['Optional II Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._optiii_samples = [];
Ryusa_Footstep_SE._valid_samples_of_optiii = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._optiii_samples[i] = String(parameters['Optional III Sample #'+(i+1)]);
};
//-----------------------------------------------------------------------------
// 初始化
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.initialize = function () {
    // 修正不正确的值
    if (this._basic_volume > 100) {
        this._basic_volume = 100;
    }
    else if (this._basic_volume < 0) {
        this._basic_volume = 0;
    };
    if (this._anti_machinegun_value > 25) {
        this._anti_machinegun_value = 25;
    }
    else if (this._anti_machinegun_value < 5) {
        this._anti_machinegun_value = 5;
    };
    if (this._dashing_hotfix < 0) {
      this._dashing_hotfix = 1;
    }
    else if (this._dashing_hotfix > 128) {
      this._dashing_hotfix = 128;
    }
    else if (Imported.SAN_AnalogMove && this._analogmove_patch) {
      this._dashing_hotfix = 18;
    };
    if (this._walking_hotfix < 0) {
      this._walking_hotfix = 1;
    }
    else if (Imported.SAN_AnalogMove && this._analogmove_patch) {
      this._walking_hotfix = 15;
    }
    else if (this._walking_hotfix > 128) {
      this._walking_hotfix = 128;
    };
    if (this._walking_phase < 0) {
      this._walking_phase = 0;
    }
    else if (this._walking_phase > 360) {
      this._walking_phase = 360;
    };
    // 初始化数值
    this._dash_count = 0;
    this._walk_count = 0;
    // 初始化可用的 Sample List
    function valid_samples(array) {
        var temp_array = [];
        for (var i = 0; i <= array.length; i++) {
            if (array[i]) {
                temp_array.push(array[i]);
            }
        }
        return temp_array;
    }
    // 将可用的 Sample 装入各自的数组内
    this._valid_samples_of_grass = valid_samples(this._grass_samples);
    this._valid_samples_of_sand  = valid_samples(this._sand_samples);
    this._valid_samples_of_snow  = valid_samples(this._snow_samples);
    this._valid_samples_of_wood  = valid_samples(this._wood_samples);
    this._valid_samples_of_water = valid_samples(this._water_samples);
    this._valid_samples_of_stone = valid_samples(this._stone_samples);
    this._valid_samples_of_metal = valid_samples(this._metal_samples);
    this._valid_samples_of_opti  = valid_samples(this._opti_samples);
    this._valid_samples_of_optii = valid_samples(this._optii_samples);
    this._valid_samples_of_optiii= valid_samples(this._optiii_samples);
    this._last = 0;
};

Ryusa_Footstep_SE.initialize();

//-----------------------------------------------------------------------------
// 判断是否启用脚步声系统
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.enable = function () {
    return $gameSwitches.value(this._switch);
};

//-----------------------------------------------------------------------------
// 预处理
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.play = function () {
    if (this.enable() && this.is_moving()) {
        return this.play_se();
    }
};

//-----------------------------------------------------------------------------
// 判断角色移动状态
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.is_moving = function () {
    return $gamePlayer.isMoving();
};

Ryusa_Footstep_SE.is_dashing = function () {
    return $gamePlayer.isDashing();
};

Ryusa_Footstep_SE.is_stopping = function () {
    return $gamePlayer.isStopping();
};

//-----------------------------------------------------------------------------
// 获取区域 ID 或地形 ID
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.get_mark = function () {
    // 如果使用区域 ID
    if (this._use_region_id) {
        return $gameMap.regionId($gamePlayer.x, $gamePlayer.y);
    }
    // 如果使用地形 ID
    else {
        return $gamePlayer.terrainTag();
    }
};

//-----------------------------------------------------------------------------
// 执行 Round Robin 算法
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.rr_sample = function (array) {
    var output_sample;
    var index;
    // 执行 RR 算法
    while (!index || index === this._last) {
        //index = Math.floor(Math.random() * array.length);
        index = (Math.random() * array.length).toFixed(0);
    }
    this._last = index;
    output_sample = array[index];
    return output_sample;
  };

//-----------------------------------------------------------------------------
// 获取地形对应的采样数组
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.get_terrain_based_sample = function () {
    var mark = this.get_mark();
    this.debug("terrain id is: " + mark);
    switch (mark) {
        case this._id_as_grass:
            return this.rr_sample(this._valid_samples_of_grass);
            break;
        case this._id_as_sand:
            return this.rr_sample(this._valid_samples_of_sand);
            break;
        case this._id_as_snow:
            return this.rr_sample(this._valid_samples_of_snow);
            break;
        case this._id_as_wood:
            return this.rr_sample(this._valid_samples_of_wood);
            break;
        case this._id_as_water:
            return this.rr_sample(this._valid_samples_of_water);
            break;
        case this._id_as_stone:
            return this.rr_sample(this._valid_samples_of_stone);
            break;
        case this._id_as_metal:
            return this.rr_sample(this._valid_samples_of_metal);
            break;
        case this._id_as_opti:
            return this.rr_sample(this._valid_samples_of_opti);
            break;
        case this._id_as_optii:
            return this.rr_sample(this._valid_samples_of_optii);
            break;
        case this._id_as_optiii:
            return this.rr_sample(this._valid_samples_of_optiii);
            break;
        default:
            return;
    }
};

//-----------------------------------------------------------------------------
// 机关枪现象抑制
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.anti_machinegun = function () {
  var temp_value;
    // 执行机关枪现象抑制
    if (this._enable_anti_machinegun) {
      temp_value = this._basic_volume + this._anti_machinegun_value * Math.floor(Math.random() - Math.random());
      // 简易音量限制
      if (temp_value > this._ceiling) {
        return this._ceiling;
      }
      else {
        return temp_value;
      };
    }
    else {
        return this._basic_volume;
    };
};

//-----------------------------------------------------------------------------
// 播放脚步声
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.play_se = function () {
    var fixed_volume = this.anti_machinegun();
    var sequenced_sample = this.get_terrain_based_sample();
    //var angle = 0;
    this.debug("playing sample: " + sequenced_sample);
    var sample = {name: sequenced_sample, volume: fixed_volume, pitch: 100, pan: 0};
    if (sequenced_sample) {
        // 如果是跑步状态则进行修正，间隔 dashing_hotfix 步播放一次脚步声
        if (this.is_dashing()) {
            if (this._dash_count === 0) {
                AudioManager.playSe(sample);
            }
            this._dash_count ++;
            this._dash_count = this._dash_count % this._dashing_hotfix;
        }
        // 遗留：未对跳跃状态进行判断
        // 如果是行走状态则进行修正，间隔 walking_hotfix 步播放一次脚步声
        else {
          if (this._walk_count === 0) {
            AudioManager.playSe(sample);
          }
          this._walk_count ++;
          this._walk_count = this._walk_count % this._walking_hotfix;
        }
    }
};

//-----------------------------------------------------------------------------
// 调试
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.debug = function(message) {
    if (this._debug) {
        console.log(message);
    }
};

//-----------------------------------------------------------------------------
// 复写
//-----------------------------------------------------------------------------
// 复写内容来自 rpg_objects 的 Game_Player
RyusaWorks.Ryusa_FootstepSE.Game_Player_executeMove = Game_Player.prototype.executeMove;
Game_Player.prototype.executeMove = function (direction) {
    RyusaWorks.Ryusa_FootstepSE.Game_Player_executeMove.call(this, direction);
    Ryusa_Footstep_SE.play();
    };

//-----------------------------------------------------------------------------
// Sanshiro 的 Analog Move 兼容补丁
//-----------------------------------------------------------------------------
if (Imported.SAN_AnalogMove && this._analogmove_patch) {
    RyusaWorks.Ryusa_FootstepSE.Game_Plaer_moveByInput = Sanshiro.Game_AnalogMove.Game_Player_moveByInput;
    Sanshiro.Game_AnalogMove.Game_Player_moveByInput = function() {
        RyusaWorks.Ryusa_FootstepSE.Game_Plaer_moveByInput.call(this);
        Ryusa_Footstep_SE.play();
        };
};
