var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://frankiero:okgaeta1okgaeta2@s18454838.onlinehome-server.info:27017/example', ['routines']);
var JSONStream = require('JSONStream');

db.on('error', function(err) {
    console.log('database error', err)
});

db.on('connect', function() {
    console.log('database connected')
});

// get all routines
router.get('/routines/', function(req, res, next) {

    db.routines.find(function(err, docs) {
        if (err) {
            res.send(err);
        } else {
            res.json(docs);
        }
    });

});

// get single routine
router.get('/routine/:id', function(req, res, next) {

    db.routines.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(err, routine) {
        if (err) {
            res.send(err);
        } else {
            res.json(routine);
        }
    });

});

// get by Sport
router.get('/routines/sport', function(req, res, next) {

    db.routines.find({ type: "sport" }, function(err, routine) {
        if (err) {
            res.send(err);
        } else {
            res.json(routine);
        }
    });

});

//get by Kitchen
router.get('/routines/kitchen', function(req, res, next) {

    db.routines.find({ type: "kitchen" }, function(err, routine) {
        if (err) {
            res.send(err);
        } else {
            res.json(routine);
        }
    })
})

//Save task
router.post('/routine', function(req, res, next) {
    var routine = req.body;
    console.log('API POST');
    console.log(req.body);
    db.routines.save(routine, function(err, routine) {
        if (err) {
            console.log('error during the save function in the routine api');
            res.send(err);
        } else {
            res.json(routine);
        }
    });
});

//Delete task
router.delete('/routine/:id', function(req, res, next) {
    db.routines.remove({ _id: mongojs.ObjectId(req.params.id) }, function(err, routine) {
        if (err) {
            res.send(err);
        } else {
            res.json(routine);
        }
    })
});

//Update PUT
router.put('/routine/:id', function(req, res, next) {
    var routine = req.body;
    var updRoutine = {};
    db.routines.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(err, routine) {
        if (err) {
            res.send(err);
        } else {
            updRoutine = routine;
        }
    });
    //simple validation must be added
    if (routine.username == undefined) {
        updRoutine.username = 'anonymus';
    } else { updRoutine.username = routine.username; }
    updRoutine.type = routine.type;

    updRoutine.isDone = routine.isDone;
    console.log(updRoutine);
    if (!updRoutine) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {

        db.routines.update({ _id: mongojs.ObjectId(req.params.id) }, updRoutine, {}, function(err, routine) {
            if (err) {
                res.send(err);
            } else {
                res.json(routine);
            }
        });
    }

});

module.exports = router;