/*:
 * @plugindesc v2.02 A gauge plugin that is useful in many ways. See help for details.
 * @author Procraftynation - https://github.com/procraftynation
 *
 * @help
 * ============================================================================
 * DOCUMENTATION: (Loooooooong description: help me shorten it)
 *
 * Overview:
 * 仪表动作系统捕获按下的 OK 按钮并填充仪表，直到释放 OK 按钮。
 * 释放 OK 按钮后，仪表清空。
 * 只有当指定的生命周期被消耗并确定结果时，系统才会停止。
 *  
 * 
 * 从这个版本开始，有 3 种类型的仪表：
 *  1. Filling - 默认。 按下 OK 按钮时计量表正在填充，松开 OK 按钮时计量表清空。
 *          
 *  2. Moving Cursor - 光标不会填充和清空仪表，而是沿着填充图像移动并等待在指定的成
 *          功点按下 OK 按钮。
 *          
 *  3. No Action - only requires lifetime. Like a casting gauge only.
 *          If a success point is specified, a random result will be determined
 *          using success point as percentage of success.
 * ============================================================================
 * 图像文件
 * ============================================================================
 * 1. Fill - 显示填充量的仪表的一部分。
 * 2. Cursor - 指示填充位置的仪表的一部分（范围）
 * 3. Lifetime - 类似于填充图像，但根据指定的生命周期填充
 * 4. Background - 为了美观。 先渲染
 * 5. Foreground - 为了美观。 最后渲染
 * ============================================================================
 * USAGE
 * ============================================================================
 * 要设置仪表，请使用脚本调用创建一个事件：
 *   $gameSystem.gauge("gaugeId");
 *   将 'gaugeId' 替换为任何文本。 这用于识别和管理多个仪表（有关设置选项，请参阅链式函数参考）
 *   确定结果：
 *   根据类型，结果可以放在变量上：
 *      1 - success, 2 - failure, 3 - canceled
 *   此外，另一种更灵活的方法是使用：
 *      a. $gameSystem.("gaugeId").isSuccess()
 *      b. $gameSystem.("gaugeId").isFailed()
 *      c. $gameSystem.("gaugeId").isCancelled()
 * 
 * ============================================================================
 * Functions Reference:
 * ============================================================================
 * FILL Options:
 *   $gameSystem.gauge("gaugeId").fill(图片名, X, Y);
 *      设置仪表的填充图像。 偏移量是相对于背景的。
 *      偏移量是可选的，默认为 0。 
 *   $gameSystem.gauge("gaugeId").fillSpeed(value);
 *      设置仪表填充运动的帧速度。 默认 1
 *   $gameSystem.gauge("gaugeId").emptySpeed(value);
 *      设置仪表清空运动的帧数。
 *      如果未设置，emptySpeed 将采用 fillSpeed 的值 
 *   $gameSystem.gauge("gaugeId").fillReset();
 *      仪表填充到最大时不会重置，默认重置为0重新开始
 *      
 *      
 * 光标选项:
 *   $gameSystem.gauge("gaugeId").cursor(imageName);
 *      设置仪表的光标图像。 光标自动垂直居中于填充图像，
 *      并根据指定的成功点水平定位。 
 *   $gameSystem.gauge("gaugeId").movingCursor();
 *      设置光标沿填充图像的水平宽度移动。
 *      如果调用此方法，则填充将“填充”到最大值，
 *      并将等待 OK 按钮根据指定的成功点确定结果。 
 *   $gameSystem.gauge("gaugeId").bounceCursor();
 *      设置光标沿填充图像的水平宽度来回移动。
 *      这只在光标移动时生效。 
 *      默认移动是将位置重置为起点。
 *   $gameSystem.gauge("gaugeId").cursorStartLeft();
 *      将移动光标的起始位置设置为填充图像的最左侧。
 *   $gameSystem.gauge("gaugeId").cursorStartRight();
 *      将移动光标的起始位置设置为填充图像的最右侧。
 *   $gameSystem.gauge("gaugeId").cursorSpeed(value);
 *      以帧为单位设置光标移动的速度。
 *      
 * LIFETIME 选项:
 *   $gameSystem.gauge("gaugeId").lifetime(imageName, offsetX, offsetY);
 *      设置仪表的生命周期/计时器图像。 偏移量是相对于背景的。
 *      偏移量是可选的，默认为 0。 
 *   $gameSystem.gauge("gaugeId").lifetimeValue(value);
 *      以帧为单位设置生命值。 一般情况下，60帧=1秒
 *   $gameSystem.gauge("gaugeId").eternalLife();
 *      将仪表的寿命设置为“无限”。 如果调用此方法，
 *      则只有确定和取消按钮才能停止仪表（刷新按钮除外）。 
 *   $gameSystem.gauge("gaugeId").lifetimeDecreasing();
 *      将生命周期图像的填充类型设置为从“满”到“空”。
 *      默认情况下，生命周期正在减少。
 *   $gameSystem.gauge("gaugeId").lifetimeIncreasing();
 *      将生命周期图像的填充类型设置为从“空”到“满”。
 *      默认情况下，生命周期正在减少。
 *      
 * ROTATION Options:
 *   $gameSystem.gauge("gaugeId").rotateClockwise90();
 *      将整个仪表的旋转设置为顺时针 90 度。
 *   $gameSystem.gauge("gaugeId").rotateCounter90();
 *      将整个仪表的旋转设置为逆时针 90 度或 -90。
 *   $gameSystem.gauge("gaugeId").rotateClockwise(degrees);
 *      将整个仪表的旋转设置为顺时针指定的度数。
 *   $gameSystem.gauge("gaugeId").rotateCounter(degrees);
 *      将整个仪表的旋转设置为逆时针指定的度数。
 *      注意：旋转选项可能会弄乱定位。
 *      $gameSystem.gauge("gaugeId").offset(x,y) should be used to this.
 *      
 * POSITIONING Options:
 *   $gameSystem.gauge("gaugeId").upperLeft();
 *     将仪表的位置设置在屏幕的左上角。
 *   $gameSystem.gauge("gaugeId").upperCenter();
 *      将仪表的位置设置为屏幕的上部中心。
 *   $gameSystem.gauge("gaugeId").upperRight();
 *      Sets the position of the gauge to the upper right of the screen.
 *   $gameSystem.gauge("gaugeId").centerLeft();
 *      Sets the position of the gauge to the center left of the screen.
 *   $gameSystem.gauge("gaugeId").centerCenter();
 *      将仪表的位置设置为屏幕中心。
 *   $gameSystem.gauge("gaugeId").centerRight();
 *      Sets the position of the gauge to the center right of the screen.
 *   $gameSystem.gauge("gaugeId").lowerLeft();
 *      Sets the position of the gauge to the lower left of the screen.
 *   $gameSystem.gauge("gaugeId").lowerCenter();
 *      Sets the position of the gauge to the lower center of the screen.
 *   $gameSystem.gauge("gaugeId").lowerRight();
 *      Sets the position of the gauge to the lower right of the screen.
 *   $gameSystem.gauge("gaugeId").abovePlayer();
 *      将仪表的位置设置在玩家上方。
 *   $gameSystem.gauge("gaugeId").belowPlayer();
 *      将仪表的位置设置为低于玩家。
 *   $gameSystem.gauge("gaugeId").aboveEvent(mapEventId);
 *      将仪表的位置设置为高于指定地图事件。
 *   $gameSystem.gauge("gaugeId").belowEvent(mapEventId);
 *      将仪表的位置设置为低于指定的地图事件。
 *   $gameSystem.gauge("gaugeId").offset(x, y);
 *      按指定的偏移量 x 和 y 移动仪表。 这是相对于上面指定的位置。
 *      
 *      
 * 成功和行动后相关选项：
 *   $gameSystem.gauge("gaugeId").successPoint(value);
 *     设置光标沿填充组件宽度的百分比位置。例如填充组件的宽度为200，
 *      指定的光标点为50，由于光标点指定为50，
 *      光标图像将放置在填充组件的中间 50%。
 *      值：1 - 100 
 *      Values: 1 - 100
 *   $gameSystem.gauge("gaugeId").successPointAbove();
 *      设置成功结果将在指定的成功点之上确定。
 *       例如：successPoint = 75. 成功结果将是 75-100
 *   $gameSystem.gauge("gaugeId").successPointBelow();
 *      设置成功结果将在指定的成功点以下确定。
 *      例如：successPoint = 75。成功结果将是从 0-75
 *   $gameSystem.gauge("gaugeId").successPointRange(min, max);
 *      将成功点设置为范围。 这将覆盖指定的成功点。
 *   $gameSystem.gauge("gaugeId").mapEventId(mapEventId);
 *      设置在仪表操作完成后要调用的地图事件 ID
 *      NOTE: common event will override this
 *   $gameSystem.gauge("gaugeId").commonEventId(commonEventId);
 *      设置在仪表操作完成后要调用的公共事件 ID
 *   $gameSystem.gauge("gaugeId").resultVariableId(variableId);
 *      将结果值设置为指定的变量。
 *      1 - success, 2 - failure, 3 - canceled
 *      
 * OTHER functions:
 *   $gameSystem.gauge("gaugeId").background(imageName, offsetX, offsetY);
 *      设置仪表的背景图像。 偏移量是相对于整个仪表的。
 *      偏移量是可选的，默认为 0。 
 *   $gameSystem.gauge("gaugeId").foreground(imageName, offsetX, offsetY);
 *      设置仪表的前景图像。 偏移量是相对于整个仪表的。
 *      偏移量是可选的，默认为 0。 
 *   $gameSystem.gauge("gaugeId").noAction();
 *      将仪表设置为不处理任何操作，确定/取消按钮。
 *      如果调用此方法，则生命周期图像是唯一需要的图像。
 *      This is used for casting only gauges.
 *   $gameSystem.gauge("gaugeId").allowMovement();
 *      如果这个被调用，玩家可以在仪表运行时四处走动。
 *   $gameSystem.gauge("gaugeId").pauseBeforeFadeOut(frames);
 *      设置在确定动作和结果之后和开始淡出之前仪表将显示的帧数。
 *      
 *   $gameSystem.gauge("gaugeId").fadeOutSpeed(value);
 *      设置仪表淡出的速度。
 *   $gameSystem.gauge("gaugeId").fadeOutInstant();
 *      将淡出速度设置为 255 以在 1 帧内完全淡出。
 *   $gameSystem.gauge("gaugeId").waitToFinish(); 
 *      阻止事件（调用此仪表开始的地方）继续执行事件命令队列中的下一个命令。 
 *      
 *  
 * START function: 
 *   $gameSystem.gauge("gaugeId").start();
 *      调用以启动并显示仪表。
 *       
 * 结果相关函数：通常在事件中称为使用条件分支。
 *   $gameSystem.gauge("gaugeId").isMoving();
 *      如果仪表当前正在移动，则返回 true。 填充是“填充”的地方
 *      或者光标在移动。 
 *   $gameSystem.gauge("gaugeId").isDead();
 *      如果仪表的生命周期被消耗，则返回 true。
 *      如果操作也被取消，则仪表将被视为死亡。 
 *   $gameSystem.gauge("gaugeId").isSuccess();
 *      如果结果成功则返回 true！
 *   $gameSystem.gauge("gaugeId").isFailed();
 *      如果结果失败则返回 true！
 *   $gameSystem.gauge("gaugeId").isCancelled();
 *      如果操作被取消则返回 true！
 *      
 * ============================================================================
 * 链式函数：
 * ============================================================================
 * 除了 RESULT RELATED 函数之外，上述大多数函数都是链式函数。
 *  可以在一行中调用链式函数，而无需重复  $gameSystem.gauge("gaugeId")
 * Example: 
 *      $gameSystem.gauge("fishing").fill("DefaultFill",81,27).cursor("DefaultCursor");
 *      $gameSystem.gauge("fishing").background("DefaultBackground").foreground("FishingIcon");
 *      $gameSystem.gauge("fishing").lifetime("DefaultTimer",81,77);
 *      $gameSystem.gauge("fishing").waitToFinish().start();
 * 
 * ============================================================================
 * 仪表设置事件
 * ============================================================================
 * 仪表设置脚本调用现在可以放置在 1 次运行的地图事件中。您可以有
 * 1 个地图事件来设置地图上的所有仪表，当您想使用仪表时，
 * 您可以随时调用 start() 函数。
 * 确保您没有在设置事件中调用 start() 函数。
 * 
 * Example:
 *  Map Event 001: Setup gauge "fishing", "drilling"
 *  Map Event 002: Call and display the fishing gauge
 *      $gameSystem.gauge("fishing").start();
 *  Map Event 003: Call and display the drilling gauge    
 *      $gameSystem.gauge("drilling").start();
 *  Map Event 004: Call and display the fishing gauge again without repeating the setup
 *      $gameSystem.gauge("fishing").start();
 * ============================================================================
 * Change Log
 * ============================================================================
 * v2.02 - Fixed Object too big when saving - moved gauge objects to $gameTemp instead of $gameSystem.
 * v2.01 - Rewrite plugin. NOT COMPATIBLE with older versions. Version based on number of changes detected by git.
 *       - Changed and removed a lot of functions. See documentation for available functions.
 *       - Added gaugeId for managing MULTIPLE gauges. Allows gauge setup on a different event.
 *       - Added new feature MOVING CURSOR.
 *       - Added new feature NO ACTION - only requires lifetime. Like a casting gauge only.
 *       - Added positioning options ABOVE/BELOW a map event.
 *       - Added lifetime option to be eternal.
 * v1.08 - Moved call to __finish. Called only when gauge fades out completly.
 *       - Added option to position gauge above or below player character.
 *       - Added option to make lifetime image decrease instead of increasing.
 *       - Added $gameSystem function $gameSystem.gauge() for easier access of gauge.
 *       - New gauge functions: isMoving(), isDead(), isSuccess(), isFailed() and isCancelled().
 *           Ex: $gameSystem.isMoving()
 *       - Added new option for success point to be above or below cursor point.
 *       - Changed orientation to rotation for future display options.
 * v1.01 - Fixed cursor positioning.
 * v1.00 - Initial release!
 * =====================================================================
 * Terms of Use
 * =====================================================================
 * Free for use in non-commercial and commercial games just give credit
 * and link back to https://www.youtube.com/c/procraftynation.
 * If commercial, a free copy of the game is awesome but optional.
 * =====================================================================*/
(function () {
    var Imported = Imported || {};
    Imported.DEX_GAS = true;
    var DEX = DEX || {};
    DEX.GAS = DEX.GAS || {};
    DEX.GAS.CONS = {
        ROTATE00: 0, ROTATE90C: 90, ROTATE90CC: -90,
        POS_LOWER_LEFT: 1,
        POS_LOWER_CENTER: 2,
        POS_LOWER_RIGHT: 3,
        POS_CENTER_LEFT: 4,
        POS_CENTER_CENTER: 5,
        POS_CENTER_RIGHT: 6,
        POS_UPPER_LEFT: 7,
        POS_UPPER_CENTER: 8,
        POS_UPPER_RIGHT: 9,
        POS_ABOVE_PLAYER: 10,
        POS_BELOW_PLAYER: 11,
        POS_ABOVE_EVENT: 12,
        POS_BELOW_EVENT: 13,
        RESULT_NONE: 0,
        RESULT_SUCCESS: 1,
        RESULT_FAILURE: 2,
        RESULT_CANCEL: 3,
        ACTION_NONE: 0,
        ACTION_FILL: 1,
        ACTION_CURSOR: 2,
        DIR_LEFT: -1,
        DIR_RIGHT: 1
    };
    /*
     * GaugeComponent Class
     */
    function GaugeComponent() {
        this.initialize.apply(this, arguments);
    }
    GaugeComponent.prototype = Object.create(Sprite.prototype);
    GaugeComponent.prototype.constructor = GaugeComponent;
    GaugeComponent.prototype.initialize = function (bitmap, offsetX, offsetY) {
        Sprite.prototype.initialize.call(this, bitmap);
        this.__offsetX = offsetX || 0;
        this.__offsetY = offsetY || 0;
        this.__isReady = false;
        this.__offsetUpdate = false;
    };
    GaugeComponent.prototype.isReady = function () {
        //checks if the bitmap is really loaded with height and width. called on update()
        if (this.bitmap && this.bitmap.height !== 0 && this.bitmap.width !== 0)
            return true;
        return false;
    };
    GaugeComponent.prototype.updateOffsetPosition = function () {
        if (this.__offsetUpdate) {
            return;
        }
        this.x += this.__offsetX;
        this.y += this.__offsetY;
        this.__offsetUpdate = true;
    };
    GaugeComponent.prototype.reset = function () {
        this.__offsetUpdate = false;
    };
    /*
     * GaugeFillComponent Class
     */
    function GaugeFillComponent() {
        this.initialize.apply(this, arguments);
    }
    GaugeFillComponent.prototype = Object.create(GaugeComponent.prototype);
    GaugeFillComponent.prototype.constructor = GaugeFillComponent;
    GaugeFillComponent.prototype.initialize = function (bitmap, offsetX, offsetY) {
        GaugeComponent.prototype.initialize.call(this, bitmap, offsetX, offsetY);
        this.__isMoving = true;
        this.__fillSpeed = 1;
        this.__emptySpeed = 0;//if 0, uses fillSpeed
        this.__startAt = 0;
        this.__reset = false;//moves back and forth, default to false, resets to 0
        //
        this.__value = 0;
    };
    GaugeFillComponent.prototype.handleFilling = function () {
        if (!this.__isMoving || !this.bitmap) {
            return false;
        }
        this.__value += this.__fillSpeed;


        if (this.__value >= this.bitmap.width) {
            if (this.__reset) {
                this.__value = this.bitmap.width;
            } else {
                this.__value = 0;
            }
        }
        this.setFrame(0, 0, this.__value, this.bitmap.height);
    };
    GaugeFillComponent.prototype.handleEmptying = function () {
        if (!this.__isMoving || !this.bitmap) {
            return false;
        }
        if (this.__emptySpeed === 0) {
            this.__value -= this.__fillSpeed;
        } else {
            this.__value -= this.__emptySpeed;
        }
        this.setFrame(0, 0, this.__value, this.bitmap.height);
        if (this.__value < 0) {
            this.__value = 0;
        }
    };
    GaugeFillComponent.prototype.reset = function () {
        this.__value = 0;
    };

    /*
     * GaugeCursorComponent Class
     */
    function GaugeCursorComponent() {
        this.initialize.apply(this, arguments);
    }
    GaugeCursorComponent.prototype = Object.create(GaugeComponent.prototype);
    GaugeCursorComponent.prototype.constructor = GaugeCursorComponent;
    GaugeCursorComponent.prototype.initialize = function (bitmap, offsetX, offsetY) {
        GaugeComponent.prototype.initialize.call(this, bitmap, offsetX, offsetY);
        this.__isMoving = false;
        this.__speed = 1;
        this.__bounce = false;
        this.__direction = DEX.GAS.CONS.DIR_RIGHT;
        this.__maxMovementX = 100;
        this.__minMovementX = 0;
        this.__unMovedX = -1;
    };
    GaugeCursorComponent.prototype.movementRange = function (min, max) {
        this.__minMovementX = min;
        this.__maxMovementX = max;
    };
    GaugeCursorComponent.prototype.handleMovement = function () {
        if (!this.__isMoving) {
            return;
        }
        if (this.__unMovedX === -1) {
            this.__unMovedX = this.x;
        }
        //move cursor
        this.x += (this.__direction * this.__speed);
        //move within container
        if (this.__direction === DEX.GAS.CONS.DIR_RIGHT &&
                this.x >= this.__maxMovementX - this.bitmap.width) {
            if (this.__bounce) {
                this.__direction = DEX.GAS.CONS.DIR_LEFT;
            } else {
                this.x = this.__minMovementX;
            }
        } else if (this.__direction === DEX.GAS.CONS.DIR_LEFT &&
                this.x <= this.__minMovementX) {
            if (this.__bounce) {
                this.__direction = DEX.GAS.CONS.DIR_RIGHT;
            } else {
                this.x = this.__maxMovementX - this.bitmap.width;
            }
        }
    };
    GaugeCursorComponent.prototype.reset = function () {
        this.x = this.__unMovedX;
        this.__direction = DEX.GAS.CONS.DIR_RIGHT;
    };
    /*
     * GaugeLifetimeComponent Class
     */
    function GaugeLifetimeComponent() {
        this.initialize.apply(this, arguments);
    }
    GaugeLifetimeComponent.prototype = Object.create(GaugeComponent.prototype);
    GaugeLifetimeComponent.prototype.constructor = GaugeLifetimeComponent;
    GaugeLifetimeComponent.prototype.initialize = function (bitmap, offsetX, offsetY) {
        GaugeComponent.prototype.initialize.call(this, bitmap, offsetX, offsetY);
        this.__life = 300; //frames
        this.__consumed = 0;
        this.__direction = DEX.GAS.CONS.DIR_LEFT;//decreasing
        this.__isDead = false;
        this.__isEternal = false;
    };
    GaugeLifetimeComponent.prototype.handleLifetime = function () {
        if (this.__isEternal || this.__isDead) {
            return false;
        }
        if (this.__consumed >= this.__life) {
            this.__isDead = true;
            return false;
        }
        if (this.bitmap) {
            var lifeTimeFillValue = this.__consumed * (this.bitmap.width / this.__life);
            if (this.__direction === DEX.GAS.CONS.DIR_LEFT) {
                lifeTimeFillValue = this.bitmap.width - lifeTimeFillValue;
            }
            this.setFrame(0, 0, lifeTimeFillValue, this.bitmap.height);
        }
        this.__consumed++;
    };
    GaugeLifetimeComponent.prototype.kill = function () {
        this.__consumed = this.__lifetime;
        this.__isDead = true;
    };
    GaugeLifetimeComponent.prototype.reset = function () {
        this.__consumed = 0;
        this.__isDead = false;
    };

    /*
     * GaugeContainer Class
     */
    function GaugeContainer() {
        this.initialize.apply(this, arguments);
    }
    GaugeContainer.prototype = Object.create(Sprite.prototype);
    GaugeContainer.prototype.constructor = GaugeContainer;
    GaugeContainer.prototype.initialize = function (gaugeId) {
        Sprite.prototype.initialize.call(this);
        this.width = 0; // auto computed based on child images
        this.height = 0; // auto computed based on child images
        //To avoid collision with Sprite variables we use double underscores (__) as variable prefixes
        this.__gaugeId = gaugeId;
        this.__action = DEX.GAS.CONS.ACTION_FILL;
        this.__waitToFinish = false;
        //IMAGE components
        this.__components = {};
        this.__components.fill = new GaugeFillComponent();
        this.__components.cursor = new GaugeCursorComponent();
        this.__components.lifetime = new GaugeLifetimeComponent();
        this.__components.background = new GaugeComponent();
        this.__components.foreground = new GaugeComponent();
        //POSITIONING
        this.__position = DEX.GAS.CONS.POS_UPPER_CENTER;
        this.__rotation = DEX.GAS.CONS.ROTATE00;
        this.__offsetX = 0;
        this.__offsetY = 0;
        this.__attachedMapEventId = 0;

        this.__successPoint = 50;//percentage center position based on fill width. 1-100
        this.__successPointAbove = false;
        this.__successPointBelow = false;
        this.__successPointMin = 0;
        this.__successPointMax = 0;
        //RESULT RELATED
        this.__result = DEX.GAS.CONS.RESULT_NONE;
        //ON SUCCESS
        this.__mapEventId = 0;
        this.__commonEventId = 0;
        //ACTION VARIABLE
        this.__resultVariableId = 0;//values 1,2,3 which indicates success, failure & cancel respectively

        this.__staringOpacity = 255;
        //FADE OUT OPTIONS
        this.__fadeOutSpeed = 10;//frames 
        this.__pauseBeforeFadeOut = 45;//frames
        this.__pausedFrames = 0;

        //flags used inside plugin only
        this.__componentsDisplayed = false;
        this.__isFinished = false;
    };
    GaugeContainer.prototype.update = function () {
        Sprite.prototype.update.call(this);
        //setup
        if (!this.__componentsDisplayed) {
            this.__setUpComponents();
        }
        if (this.__attachedMapEventId !== 0) {
            this.__moveGaugeToPosition();
        }
        this.__handleCancel();//iscanceled
        if (this.__components.lifetime.__isDead) {
            this.__updateFadeOut();
            return false; //stop code to reach handleFilling
        }
        //do the gauge filling here
        if (this.__components.cursor.__isMoving) {
            this.__handleMovingCursor();
        } else {
            this.__handleFilling();
        }


        this.__handleLifetime();
        this.__determineResult();
    };
    GaugeContainer.prototype.reset = function () {
        this.opacity = this.__staringOpacity;
        this.__componentsDisplayed = false;
        this.__pausedFrames = 0;
        this.__isFinished = false;
        this.__result = DEX.GAS.CONS.RESULT_NONE;
        //reset for reuse
        for (var key in this.__components) {
            this.__components[key].reset();
        }
    };
    //==================
    // Private methods
    //==================
    GaugeContainer.prototype.__finish = function () {
        if (this.__isFinished) {
            return false;
        }
        if (this.__resultVariableId !== 0) {
            $gameVariables.setValue(this.__resultVariableId, this.__result);
        }
        if (this.__commonEventId !== 0) {
            $gameTemp.reserveCommonEvent(this.__commonEventId);
        } else if (this.__mapEventId !== 0) {
            $gameMap.event(this.__mapEventId).start();
        }
        //enable character movement
        if (this.__action !== DEX.GAS.CONS.ACTION_NONE) {
            $gameTemp._gaugeActionStop();
            $gameSystem.enableMenu();
        }
        this.__isFinished = true;
        SceneManager._scene.removeChild(this);
    };
    GaugeContainer.prototype.__updateFadeOut = function () {
        this.__pausedFrames++;
        if (this.__pausedFrames >= this.__pauseBeforeFadeOut) {
            this.opacity -= this.__fadeOutSpeed;
            if (this.opacity <= 0) {
                //only remove from scene if not visible anymore
                this.__finish();
            }
        }
    };
    GaugeContainer.prototype.__handleMovingCursor = function () {

        if (this.__action !== DEX.GAS.CONS.ACTION_NONE
                && (Input.isTriggered("ok") || TouchInput.isTriggered())) {
            this.__components.lifetime.kill();
        } else {
            this.__components.cursor.handleMovement();
        }

    };
    GaugeContainer.prototype.__handleFilling = function () {
        if (this.__action !== DEX.GAS.CONS.ACTION_NONE
                && (Input.isPressed("ok") || TouchInput.isPressed())) {
            this.__components.fill.handleFilling();
        } else {
            this.__components.fill.handleEmptying();
        }
    };
    GaugeContainer.prototype.__handleLifetime = function () {
        this.__components.lifetime.handleLifetime();
    };
    GaugeContainer.prototype.__determineResult = function () {
        if (this.__action === DEX.GAS.CONS.ACTION_FILL && this.__components.lifetime.__isDead) {
            var minSuccessPoint = 0;
            var maxSuccessPoint = 0;
            var resultPoint = -1;
            if (this.__successPointMin === 0 && this.__successPointMax === 0) {
                if (this.__successPointAbove) {
                    minSuccessPoint = this.__components.cursor.x
                            + this.__components.cursor.bitmap.width / 2;//mid of cursor
                    maxSuccessPoint = this.__components.cursor.x
                            + this.__components.fill.bitmap.width;
                } else if (this.__successPointBelow) {
                    minSuccessPoint = 0;
                    maxSuccessPoint = this.__components.cursor.x
                            + this.__components.cursor.bitmap.width / 2;//mid of cursor
                } else {
                    minSuccessPoint = this.__components.cursor.x;
                    maxSuccessPoint = this.__components.cursor.x
                            + this.__components.cursor.bitmap.width;
                }
            } else {
                minSuccessPoint = this.__components.fill.bitmap.width * this.__successPointMin / 100;
                maxSuccessPoint = this.__components.fill.bitmap.width * this.__successPointMax / 100;
            }
            resultPoint = this.__components.fill.width + this.__components.fill.__offsetX;
            //check if between range points
            if (resultPoint >= minSuccessPoint && resultPoint <= maxSuccessPoint) {
                this.__result = DEX.GAS.CONS.RESULT_SUCCESS;
            } else {
                this.__result = DEX.GAS.CONS.RESULT_FAILURE;
            }
        } else if (this.__action === DEX.GAS.CONS.ACTION_CURSOR && this.__components.lifetime.__isDead) {
            var minSuccessPoint = 0;
            var maxSuccessPoint = 0;
            var resultPoint = -1;
            if (this.__successPointMin === 0 && this.__successPointMax === 0) {
                if (this.__successPointAbove) {
                    minSuccessPoint = (this.__components.fill.bitmap.width * this.__successPoint / 100)
                            - (this.__components.cursor.bitmap.width / 2);
                    maxSuccessPoint = this.__components.fill.bitmap.width;
                } else if (this.__successPointBelow) {
                    minSuccessPoint = 0
                    maxSuccessPoint = (this.__components.fill.bitmap.width * this.__successPoint / 100)
                            + (this.__components.cursor.bitmap.width / 2);
                } else {
                    minSuccessPoint = (this.__components.fill.bitmap.width * this.__successPoint / 100)
                            - (this.__components.cursor.bitmap.width / 2);
                    maxSuccessPoint = (this.__components.fill.bitmap.width * this.__successPoint / 100)
                            + (this.__components.cursor.bitmap.width / 2);
                }
            } else {
                minSuccessPoint = this.__components.fill.bitmap.width * this.__successPointMin / 100;
                maxSuccessPoint = this.__components.fill.bitmap.width * this.__successPointMax / 100;
            }
            resultPoint = this.__components.cursor.x
                    + (this.__components.cursor.bitmap.width / 2);
            if (resultPoint >= minSuccessPoint && resultPoint <= maxSuccessPoint) {
                this.__result = DEX.GAS.CONS.RESULT_SUCCESS;
            } else {
                this.__result = DEX.GAS.CONS.RESULT_FAILURE;
            }
        } else {
            //do a random success or fail
            if (this.__successPoint > 0) {
                if (this.__successPoint <= Math.floor((Math.random() * 100) + 1)) {
                    this.__result = DEX.GAS.CONS.RESULT_SUCCESS;
                } else {
                    this.__result = DEX.GAS.CONS.RESULT_FAILURE;
                }
            }
        }
    };
    GaugeContainer.prototype.__handleCancel = function () {
        if (this.__action !== DEX.GAS.CONS.ACTION_NONE
                && (Input.isTriggered('cancel') || TouchInput.isCancelled())) {
            this.__result = DEX.GAS.CONS.RESULT_CANCEL;
            this.__components.lifetime.kill();
        }
    };
    GaugeContainer.prototype.__setUpComponents = function () {
        if (this.__requiredComponentsReady()) {
            this.__computeDimensions();
            this.__moveGaugeToPosition();
            this.__positionComponents();
            this.__componentsDisplayed = true;
            if (this.__components.cursor.__isMoving) {
                this.__components.cursor.movementRange(this.__components.fill.x, this.__components.fill.x + this.__components.fill.bitmap.width);
            }
            //rotate gauge
            this.rotation = this.__rotation * Math.PI / 180;
        }
    };
    GaugeContainer.prototype.__requiredComponentsReady = function () {
        if (this.__action === DEX.GAS.CONS.ACTION_FILL
                || this.__action === DEX.GAS.CONS.ACTION_CURSOR) {
            return this.__components.fill.isReady() && this.__components.cursor.isReady();
        } else if (this.__action === DEX.GAS.CONS.ACTION_NONE) {
            return this.__components.lifetime.isReady();
        }
        return false;
    };
    GaugeContainer.prototype.__positionComponents = function () {
        //update offsets
        for (var key in this.__components) {
            this.__components[key].updateOffsetPosition();
        }
        if (this.__action === DEX.GAS.CONS.ACTION_NONE) {
            return false;
        }
        //vertically center cursor to fill
        this.__components.cursor.y = this.__components.fill.y + (this.__components.fill.bitmap.height - this.__components.cursor.bitmap.height) / 2;
        //move cursor based on successpoint
        if (!this.__components.cursor.__isMoving) {
            this.__components.cursor.x = this.__components.fill.x
                    + (this.__components.fill.bitmap.width * (this.__successPoint / 100))
                    - (this.__components.cursor.bitmap.width / 2);
            //bound to border only
            if (this.__components.cursor.x + this.__components.cursor.bitmap.width > this.__components.fill.bitmap.width) {
                this.__components.cursor.x = this.__components.fill.bitmap.width - this.__components.cursor.bitmap.width;
            } else if (this.__components.cursor.x - this.__components.cursor.bitmap.width < 0) {
                this.__components.cursor.x = 0;//this is relative to parent
            }
        }
    };
    GaugeContainer.prototype.__computeDimensions = function () {
        if (this.__components.background.isReady()) {
            this.height = this.__components.background.bitmap.height;
            this.width = this.__components.background.bitmap.width;
        } else {
            if (this.__action === DEX.GAS.CONS.ACTION_NONE) {
                this.height = this.__components.lifetime.bitmap.height;
                this.width = this.__components.lifetime.bitmap.width;
            } else {
                this.height = Math.max(this.__components.fill.bitmap.height, this.__components.cursor.bitmap.height);
                this.width = Math.max(this.__components.fill.bitmap.width, this.__components.cursor.bitmap.width);
            }
        }
    };
    GaugeContainer.prototype.__moveGaugeToPosition = function () {
        var x;
        var y;
        var baseWidth = Graphics.width;
        var baseHeight = Graphics.height;
        switch (this.__position) {
            case DEX.GAS.CONS.POS_ABOVE_EVENT:
                x = this.__offsetX + $gameMap.event(this.__attachedMapEventId).screenX() - this.width / 2;
                y = this.__offsetY + $gameMap.event(this.__attachedMapEventId).screenY() - this.height - $gameMap.tileHeight();
                break;
            case DEX.GAS.CONS.POS_BELOW_EVENT:
                x = this.__offsetX + $gameMap.event(this.__attachedMapEventId).screenX() - this.width / 2;
                y = this.__offsetY + $gameMap.event(this.__attachedMapEventId).screenY();
                break;
            case DEX.GAS.CONS.POS_ABOVE_PLAYER:
                x = this.__offsetX + $gamePlayer.screenX() - this.width / 2;
                y = this.__offsetY + $gamePlayer.screenY() - this.height - $gameMap.tileHeight();
                break;
            case DEX.GAS.CONS.POS_BELOW_PLAYER:
                x = this.__offsetX + $gamePlayer.screenX() - this.width / 2;
                y = this.__offsetY + $gamePlayer.screenY();
                break;
            case DEX.GAS.CONS.POS_LOWER_LEFT:
                x = this.__offsetX;
                y = this.__offsetY + baseHeight - this.height;
                break;
            case DEX.GAS.CONS.POS_LOWER_CENTER:
                x = this.__offsetX + baseWidth / 2 - this.width / 2;
                y = this.__offsetY + baseHeight - this.height;
                break;
            case DEX.GAS.CONS.POS_LOWER_RIGHT:
                x = this.__offsetX + baseWidth - this.width;
                y = this.__offsetY + baseHeight - this.height;
                break;
            case DEX.GAS.CONS.POS_CENTER_LEFT:
                x = this.__offsetX;
                y = this.__offsetY + baseHeight / 2 - this.height / 2;
                break;
            case DEX.GAS.CONS.POS_CENTER_CENTER:
                x = this.__offsetX + baseWidth / 2 - this.width / 2;
                y = this.__offsetY + baseHeight / 2 - this.height / 2;
                break;
            case DEX.GAS.CONS.POS_CENTER_RIGHT:
                x = this.__offsetX + baseWidth - this.width;
                y = this.__offsetY + baseHeight / 2 - this.height / 2;
                break;
            case DEX.GAS.CONS.POS_UPPER_LEFT:
                x = this.__offsetX;
                y = this.__offsetY;
                break;
            case DEX.GAS.CONS.POS_UPPER_CENTER:
                x = this.__offsetX + baseWidth / 2 - this.width / 2;
                y = this.__offsetY;
                break;
            case DEX.GAS.CONS.POS_UPPER_RIGHT:
                x = this.__offsetX + baseWidth - this.width;
                y = this.__offsetY;
                break;
        }
        this.x = x;
        this.y = y;
      
    };
    //====================================
    // Called after setup through chained methods
    //====================================
    GaugeContainer.prototype.start = function () {
        this.reset();
        //add children
        this.addChild(this.__components.background);
        this.addChild(this.__components.fill);
        this.addChild(this.__components.cursor);
        this.addChild(this.__components.lifetime);
        this.addChild(this.__components.foreground);
        SceneManager._scene.addChild(this);
        //only action gauge should stop movement or wait for action
        if (this.__action === DEX.GAS.CONS.ACTION_FILL
                || this.__action === DEX.GAS.CONS.ACTION_CURSOR) {
            $gameTemp._gaugeActionStart(this.__waitToFinish);
            $gameSystem.disableMenu();
        }
    };
    //=====================================
    // CHAINED PUBLIC METHODS for setting up gauge
    //=====================================

    //=====================================
    // GaugeFillComponent: setup methods
    //=====================================
    GaugeContainer.prototype.fill = function (imageName, offsetX, offsetY) {
        //immediately set up and add to child
        this.__components.fill.bitmap = ImageManager.loadPicture(imageName);
        this.__components.fill.__offsetX = offsetX || 0;
        this.__components.fill.__offsetY = offsetY || 0;
        return this;
    };
    GaugeContainer.prototype.fillSpeed = function (value) {
        this.__components.fill.__fillSpeed = value;
        return this;
    };
    GaugeContainer.prototype.emptySpeed = function (value) {
        this.__components.fill.__emptySpeed = value;
        return this;
    };
    GaugeContainer.prototype.fillReset = function () {
        this.__components.fill.__reset = true;
        return this;
    };
    //=====================================
    // GaugeCursorComponent: helper setup methods
    //=====================================
    GaugeContainer.prototype.cursor = function (imageName) {
        this.__components.cursor.bitmap = ImageManager.loadPicture(imageName);
        return this;
    };
    GaugeContainer.prototype.movingCursor = function () {
        this.__action = DEX.GAS.CONS.ACTION_CURSOR;
        this.__components.cursor.__isMoving = true;
        this.__components.fill.__isMoving = false;
        return this;
    };
    GaugeContainer.prototype.bounceCursor = function () {
        this.__components.cursor.__bounce = true;
        return this;
    };
    GaugeContainer.prototype.cursorStartLeft = function () {
        this.__components.cursor.__direction = DEX.GAS.CONS.DIR_RIGHT;
        return this;
    };
    GaugeContainer.prototype.cursorStartRight = function () {
        this.__components.cursor.__direction = DEX.GAS.CONS.DIR_LEFT;
        return this;
    };
    GaugeContainer.prototype.cursorSpeed = function (value) {
        this.__components.cursor.__speed = value;
        return this;
    };
    //=====================================
    // GaugeLifetimeComponent: helper setup methods
    //=====================================
    GaugeContainer.prototype.lifetime = function (imageName, offsetX, offsetY) {
        this.__components.lifetime.bitmap = ImageManager.loadPicture(imageName);
        this.__components.lifetime.__offsetX = offsetX || 0;
        this.__components.lifetime.__offsetY = offsetY || 0;
        return this;
    };
    GaugeContainer.prototype.lifetimeValue = function (value) {
        this.__components.lifetime.__life = value;
        return this;
    };
    GaugeContainer.prototype.eternalLife = function () {
        this.__components.lifetime.__isEternal = true;
        return this;
    };

    GaugeContainer.prototype.lifetimeDecreasing = function () {
        this.__components.lifetime.__direction = DEX.GAS.CONS.DIR_LEFT;
        return this;
    };
    GaugeContainer.prototype.lifetimeIncreasing = function () {
        this.__components.lifetime.__direction = DEX.GAS.CONS.DIR_RIGHT;
        return this;
    };

    //=====================================
    // Rotation functions
    //=====================================
    GaugeContainer.prototype.rotateClockwise90 = function () {
        this.__rotation = DEX.GAS.CONS.ROTATE90C;
        return this;
    };
    GaugeContainer.prototype.rotateCounter90 = function () {
        this.__rotation = DEX.GAS.CONS.ROTATE90CC;
        return this;
    };
    GaugeContainer.prototype.rotateClockwise = function (degrees) {
        this.__rotation = degrees;
        return this;
    };
    GaugeContainer.prototype.rotateCounter = function (degrees) {
        this.__rotation = -(degrees);
        return this;
    };
    //=====================================
    // Positioning functions
    //=====================================
    GaugeContainer.prototype.upperLeft = function () {
        this.__position = DEX.GAS.CONS.POS_UPPER_LEFT;
        return this;
    };
    GaugeContainer.prototype.upperCenter = function () {
        this.__position = DEX.GAS.CONS.POS_UPPER_CENTER;
        return this;
    };
    GaugeContainer.prototype.upperRight = function () {
        this.__position = DEX.GAS.CONS.POS_UPPER_RIGHT;
        return this;
    };
    GaugeContainer.prototype.centerLeft = function () {
        this.__gaugePosition = DEX.GAS.CONS.POS_CENTER_LEFT;
        return this;
    };
    GaugeContainer.prototype.centerCenter = function () {
        this.__position = DEX.GAS.CONS.POS_CENTER_CENTER;
        return this;
    };
    GaugeContainer.prototype.centerRight = function () {
        this.__position = DEX.GAS.CONS.POS_CENTER_RIGHT;
        return this;
    };
    GaugeContainer.prototype.lowerLeft = function () {
        this.__position = DEX.GAS.CONS.POS_LOWER_LEFT;
        return this;
    };
    GaugeContainer.prototype.lowerCenter = function () {
        this.__position = DEX.GAS.CONS.POS_LOWER_CENTER;
        return this;
    };
    GaugeContainer.prototype.lowerRight = function () {
        this.__position = DEX.GAS.CONS.POS_LOWER_RIGHT;
        return this;
    };
    GaugeContainer.prototype.abovePlayer = function () {
        this.__position = DEX.GAS.CONS.POS_ABOVE_PLAYER;
        return this;
    };
    GaugeContainer.prototype.belowPlayer = function () {
        this.__position = DEX.GAS.CONS.POS_BELOW_PLAYER;
        return this;
    };
    GaugeContainer.prototype.aboveEvent = function (mapEventId) {
        this.__position = DEX.GAS.CONS.POS_ABOVE_EVENT;
        this.__attachedMapEventId = mapEventId;
        return this;
    };
    GaugeContainer.prototype.belowEvent = function (mapEventId) {
        this.__position = DEX.GAS.CONS.POS_BELOW_EVENT;
        this.__attachedMapEventId = mapEventId;
        return this;
    };
    GaugeContainer.prototype.offset = function (x, y) {
        this.__offsetX = x;
        this.__offsetY = y;
        return this;
    };
    //=====================================
    // Finishing related functions
    //=====================================
    GaugeContainer.prototype.fadeOutSpeed = function (fadeOutSpeed) {
        this.__fadeOutSpeed = fadeOutSpeed;
        return this;
    };
    GaugeContainer.prototype.fadeOutInstant = function () {
        this.__fadeOutSpeed = 255;
        return this;
    };
    GaugeContainer.prototype.pauseBeforeFadeOut = function (pauseFrames) {
        this.__pauseBeforeFadeOut = pauseFrames;
        return this;
    };
    GaugeContainer.prototype.waitToFinish = function () {
        this.__waitToFinish = true;
        return this;
    };
    //=====================================
    // Result related functions
    //=====================================
    GaugeContainer.prototype.successPoint = function (value) {
        this.__successPoint = value;
        return this;
    };
    GaugeContainer.prototype.successPointAbove = function () {
        this.__successPointAbove = true;
        this.__successPointBelow = false;
        return this;
    };
    GaugeContainer.prototype.successPointBelow = function () {
        this.__successPointBelow = true;
        this.__successPointAbove = false;
        return this;
    };
    GaugeContainer.prototype.successPointRange = function (min, max) {
        this.__successPointMin = min;
        this.__successPointMax = max;
        return this;
    };
    GaugeContainer.prototype.mapEventId = function (mapEventId) {
        this.__mapEventId = mapEventId;
        return this;
    };
    GaugeContainer.prototype.commonEventId = function (commonEventId) {
        this.__commonEventId = commonEventId;
        return this;
    };
    GaugeContainer.prototype.resultVariableId = function (variableId) {
        this.__resultVariableId = variableId;
        return this;
    };
    GaugeContainer.prototype.isMoving = function () {
        return this.__components.fill.__value > 0;
    };
    GaugeContainer.prototype.isDead = function () {
        return this.__components.lifetime.__isDead;
    };
    GaugeContainer.prototype.isSuccess = function () {
        return this.__result === DEX.GAS.CONS.RESULT_SUCCESS;
    };
    GaugeContainer.prototype.isFailed = function () {
        return this.__result === DEX.GAS.CONS.RESULT_FAILURE;
    };
    GaugeContainer.prototype.isCancelled = function () {
        return this.__result === DEX.GAS.CONS.RESULT_CANCEL;
    };
    //=====================================
    // Other functions
    //=====================================
    GaugeContainer.prototype.background = function (imageName, offsetX, offsetY) {
        this.__components.background.bitmap = ImageManager.loadPicture(imageName);
        this.__components.background.__offsetX = offsetX || 0;
        this.__components.background.__offsetY = offsetY || 0;
        return this;
    };
    GaugeContainer.prototype.foreground = function (imageName, offsetX, offsetY) {
        this.__components.foreground.bitmap = ImageManager.loadPicture(imageName);
        this.__components.foreground.__offsetX = offsetX || 0;
        this.__components.foreground.__offsetY = offsetY || 0;
        return this;
    };
    GaugeContainer.prototype.noAction = function () {
        this.__action = DEX.GAS.CONS.ACTION_NONE;
        return this;
    };
    GaugeContainer.prototype.allowMovement = function () {
        this.__allowMovement = true;
        return this;
    };

    //=====================================
    // Returns the current gauge where you can call chained methods to update options.
    //=====================================
    Game_System.prototype.gauge = function (gaugeId) {
        $gameTemp.__gauges = $gameTemp.__gauges || {};
        gaugeId = gaugeId || "default";
        if (!(gaugeId in $gameTemp.__gauges) && $gameTemp.__gauges[gaugeId] === undefined) {
            //create new and add to gaugeactions
            $gameTemp.__gauges[gaugeId] = new GaugeContainer(gaugeId);
        }
        return $gameTemp.__gauges[gaugeId];
    };

    //=====================================
    // Game_Temp
    //=====================================
    Game_Temp.prototype._gaugeActionStart = function (waitToFinish) {
        this._gaugeActionRunning = true;
        this._gaugeActionWaitToFinish = waitToFinish;
    };
    Game_Temp.prototype._gaugeActionStop = function () {
        this._gaugeActionRunning = false;
        this._gaugeActionWaitToFinish = false;
    };
    Game_Temp.prototype._gaugeAction_Game_Player_canMove = function () {
        //determine context 
        if (SceneManager._scene instanceof Scene_Map) {
            return !this._gaugeActionRunning;
        }
        return true;
    };
    Game_Temp.prototype._gaugeAction_Game_Interpreter_updateWait = function () {
        //determine context 
        return this._gaugeActionWaitToFinish && this._gaugeActionRunning;
    };
    //=====================================
    // Game_Player
    //============================================================
    DEX.GAS.Game_Player_canMove = Game_Player.prototype.canMove;
    Game_Player.prototype.canMove = function () {
        return $gameTemp._gaugeAction_Game_Player_canMove()
                && DEX.GAS.Game_Player_canMove.call(this);
    };
    //============================================================
    // Game_Interpreter
    //============================================================
    DEX.GAS.Game_Interpreter_updateWait = Game_Interpreter.prototype.updateWait;
    Game_Interpreter.prototype.updateWait = function () {
        return $gameTemp._gaugeAction_Game_Interpreter_updateWait() || DEX.GAS.Game_Interpreter_updateWait.call(this);
    };
})();