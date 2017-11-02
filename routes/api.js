const express = require('express');
const router = express.Router();
const CardController = require('../controllers/CardController')
const controllers = require('../controllers');


router.get('/:resource', (req, res, next) => {
  let resource = req.params.resource
  let controller = controllers[resource]

  if (controller == null) {
    res.json({
      confirmaiton: 'fail',
      message: 'Invalid Resource Request: ' + resource
    })
    return
  }

  controller.find(req.query, (err, results) => {
    if (err) {
      res.json({
        confirmaiton: 'fail',
        message: err
      })
      return
    }
    res.json({
      confirmaiton: 'success',
      results: results
    })
  })
})

router.get('/:resource/:id', (req, res, next) => {
  let resource = req.params.resource
  let id = req.params.id
  let controller = controllers[resource]

  if (controller == null) {
    res.json({
      confirmaiton: 'fail',
      message: 'Invalid Resource Request: ' + resource
    })
    return
  }

  controller.findById(id, (err, result) => {
    if (err) {
      res.json({
        confirmaiton: 'fail',
        message: 'Not Found'
      })
      return
    }
    res.json({
      confirmaiton: 'success',
      result: result
    })
  })
})

router.post('/:resource', (req, res, next) => {
  var resource = req.params.resource
  let controller = controllers[resource]

  if (controller == null) {
    res.json({
      confirmaiton: 'fail',
      message: 'Invalid Resource Request: ' + resource
    })
    return
  }

  controller.create(req.body, (err, result) => {
    console.log(req.body)
    if (err) {
      res.json({
        confirmaiton: 'fail',
        message: err
      })
    }
    res.json({
      confirmaiton: 'success',
      result: result
    })
  })

})

router.delete('/:resource/:id', (req, res, next) => {
  var resource = req.params.resource
  let id = req.params.id
  let controller = controllers[resource]

  if (controller == null) {
    res.json({
      confirmaiton: 'fail',
      message: 'Invalid Resource Request: ' + resource
    })
    return
  }

  controller.destroy(id, (err, result) => {
    if (err) {
      res.json({
        confirmaiton: 'fail',
        message: err
      })
    }
    res.json({
      confirmaiton: 'success',
      result: result
    })
  })

})

module.exports = router
