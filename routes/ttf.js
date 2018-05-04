var express = require('express');
var router = express.Router();
var envConfig = require('../config/env.config');

/* Weixin validation */
router.get('/round-winners', function (req, res, next) {
    res.json([
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        },
        {
            avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Mason Liu'
        }
    ]);
});

router.get('/final-score', function (req, res, next) {
    res.json([
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        },
        {
            avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
            name: 'Jerry Wang',
            score: 5
        }
    ]);
});

module.exports = router;
