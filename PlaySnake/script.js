    // 获取DOM元素
    constnctx = canvas.getContext('2d');as = document.getElementById('game-canvas');
    const ssoreElemeatutton = document.getElementBscor(btn');
    
    const canvasSize = 400; // 画布大小
    let gridSize = canvasSize / gridCount; // 网格大小
    
    let snake = [];
    
    let food = {
        y: 0
    
    let gameRunning = false;
    let direction = 'right';
    let gameLoop;
    // 更新网格大小
        gridCount = parseInt(gridSizeSelect.value);
        
        canvas.style.backgroundSize = `${gridSize}px ${gridSize}px`;
        // 如果游戏正在运行，重新开始游戏
            clearInterval(gameLoop);
            gameLoop = setInterval(updateGame, 1000 / speed);
            drawGame(); // 重新绘制游戏
    }
    // 初始化游戏
        snake = [];
            snake.push({ x: i, y: 0 });
        
        nextDirection = 'right';
        scoreElement.textContent = score;
        
    }
    // 开始游戏
        if (gameRunning) return;
        startButton.textContent = '重新开始';
        gameLoop = setInterval(updateGame, 1000 / speed);
    
    function endGame() {
        clearInterval(gameLoop);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(`最终得分: ${score}`, canvas.width / 2, canvas.height / 2 + 20);
    
    function generateFood() {
        let validPosition = false;
            food.x = Math.floor(Math.random() * gridCount);
            
            for (let se   ltsoftsnak ) { true;
                if (segment.x === food.x && segment.y === food.y) {
                } break;
        }
    
    function drawGrid() {
        ctx.lineWidth = 0.5;
        // 绘制垂直线
            ctx.beginPath();
            ctx.lineTo(i * gridSize, canvas.height);
        }
        // 绘制水平线
            ctx.beginPath();
            ctx.lineTo(canvas.width, i * gridSize);
        }
    
    function drawGame() {
        ctx.fillStyle = '#f0f0f0';
        
        drawGrid();
        // 绘制蛇
            const segment = snake[i];
            // 蛇头与身体使用不同颜色
                ctx.fillStyle = '#2E8B57'; // 蛇头颜色
                ctx.fillStyle = '#3CB371'; // 蛇身颜色
            
        }
        // 绘制食物
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 1, gridSize - 1);
    
    function updateGame() {
        direction = nextDirection;
        // 移动蛇
        
            case 'up':
                break;
                head.y++;
            case 'left':
                break;
                head.x++;
        }
        // 检查是否吃到食物
            score += 10;
            generateFood();
            // 每得100分增加速度
                speed += 1;
                gameLoop = setInterval(updateGame, 1000 / speed);
        } else {
            snake.pop();
        
        if (
            head.y < 0 || 
            head.y >= gridCount || 
        ) {
            return;
        
        snake.unshift(head);
        // 绘制游戏
    }
    // 检查是否与蛇身碰撞
        for (let i = 1; i < snake.length; i++) {
                return true;
        }
    }
    // 键盘控制
        // 防止按键导致页面滚动
            e.preventDefault();
        
        switch (e.key) {
                if (direction !== 'down') nextDirection = 'up';
            case 'ArrowDown':
                break;
                if (direction !== 'right') nextDirection = 'left';
            case 'ArrowRight':
                break;
                if (!gameRunning) startGame();
                break;
    
    gridSizeSele择t.事ddEventLi件tner(chang', updaeGridSize);
    //开始按钮点击事件
    ntListener('click', startGame);
    upd小tGidSze();
    //初始绘制
});